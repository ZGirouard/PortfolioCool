import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactElement,
  type ReactNode,
} from 'react'
import styled from '@emotion/styled'

const Viewport = styled.div<{ $dragging: boolean }>`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-top: -100px;
  width: 100%;
  overflow-x: auto;
  overflow-y: visible;
  padding-top: 0.4rem;
  padding-bottom: 1.4rem;
  touch-action: none;
  cursor: ${(p) => (p.$dragging ? 'grabbing' : 'grab')};
  user-select: none;
  -webkit-user-select: none;
  scrollbar-width: none;
  overscroll-behavior-x: contain;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Track = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 100px;
  width: max-content;
`

const Set = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 100px;
  flex-shrink: 0;
`

/** Wraps each card; scale is driven from scroll position for center “focus”. */
const CardScaleSlot = styled.div`
  flex-shrink: 0;
  transform-origin: center center;
  will-change: transform;
`

const SET_COUNT = 3

/** Scale of the card closest to viewport center */
const SCALE_FOCUS = 1.075
/** Scale when far from center */
const SCALE_SIDE = 0.8
/** 0–1 smoothing toward target each update (higher = snappier) */
const SCALE_LERP = 0.42

const VELOCITY_SAMPLE_CAP = 8
/** px/ms — below this, no glide after release */
const MOMENTUM_MIN_SPEED = 0.10
/** px/ms — cap flick strength */
const MOMENTUM_MAX_SPEED = 4
/** ~fraction of velocity retained every ~16.7ms */
const FRICTION_BASE = 0.942
/** stop when |v| below this (px/ms) */
const MOMENTUM_STOP_SPEED = 0.032
/** Pixels of horizontal movement before carousel drag “wins” over link clicks. */
const DRAG_THRESHOLD_PX = 10

export type WorkCarouselProps = {
  children: ReactNode
}

type VelocitySample = { dx: number; dt: number }

export function WorkCarousel({ children }: WorkCarouselProps) {
  const items = Children.toArray(children).filter(isValidElement) as ReactElement[]

  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const firstSetRef = useRef<HTMLDivElement>(null)
  const periodRef = useRef(0)
  const adjustingRef = useRef(false)

  const dragRef = useRef({
    active: false,
    /** True only after horizontal movement exceeds DRAG_THRESHOLD_PX (pointer capture then applies). */
    dragging: false,
    pointerId: -1,
    startX: 0,
    startScroll: 0,
  })
  const suppressClickRef = useRef(false)

  const lastSampleRef = useRef({ x: 0, t: 0 })
  const velocitySamplesRef = useRef<VelocitySample[]>([])

  const momentumRafRef = useRef(0)
  const glideVRef = useRef(0)
  const lastGlideTRef = useRef(0)

  const scaleSmoothRef = useRef(new WeakMap<Element, number>())

  const [dragging, setDragging] = useState(false)

  const updateFocusScales = useCallback(() => {
    const vp = viewportRef.current
    const track = trackRef.current
    if (!vp || !track) return

    const vpRect = vp.getBoundingClientRect()
    if (vpRect.width <= 0) return

    const cx = vpRect.left + vpRect.width * 0.5
    const blend = vpRect.width * 0.52 + 240

    const slots = track.querySelectorAll<HTMLElement>('[data-carousel-scale-slot]')
    const wm = scaleSmoothRef.current

    slots.forEach((el) => {
      const r = el.getBoundingClientRect()
      const cardCx = r.left + r.width * 0.5
      const dist = Math.abs(cardCx - cx)
      const t = Math.max(0, Math.min(1, 1 - dist / blend))
      const u = t * t * (3 - 2 * t)
      const target = SCALE_SIDE + (SCALE_FOCUS - SCALE_SIDE) * u

      const prev = wm.get(el)
      const next =
        prev === undefined
          ? target
          : prev + (target - prev) * SCALE_LERP

      wm.set(el, next)
      el.style.transform = `scale(${next})`
    })
  }, [])

  const measureAndCenter = useCallback(() => {
    const vp = viewportRef.current
    const track = trackRef.current
    const set0 = firstSetRef.current
    if (!vp || !track || !set0) return

    const gap = parseFloat(getComputedStyle(track).gap) || 100
    const period = set0.offsetWidth + gap
    if (period <= 0) return

    periodRef.current = period
    vp.scrollLeft = period
    requestAnimationFrame(() => updateFocusScales())
  }, [updateFocusScales])

  useLayoutEffect(() => {
    measureAndCenter()
    const set0 = firstSetRef.current
    const track = trackRef.current
    if (!set0) return
    const ro = new ResizeObserver(() => measureAndCenter())
    ro.observe(set0)
    if (track) ro.observe(track)
    return () => ro.disconnect()
  }, [measureAndCenter, items.length])

  const syncLoop = useCallback(() => {
    const el = viewportRef.current
    const period = periodRef.current
    if (!el || period <= 0 || adjustingRef.current) return

    const sl = el.scrollLeft
    if (sl >= 2 * period - 5) {
      adjustingRef.current = true
      el.scrollLeft = sl - period
      adjustingRef.current = false
    } else if (sl <= 5) {
      adjustingRef.current = true
      el.scrollLeft = sl + period
      adjustingRef.current = false
    }
  }, [])

  const syncAndUpdateScales = useCallback(() => {
    syncLoop()
    updateFocusScales()
  }, [syncLoop, updateFocusScales])

  const stopMomentum = useCallback(() => {
    if (momentumRafRef.current) {
      cancelAnimationFrame(momentumRafRef.current)
      momentumRafRef.current = 0
    }
    glideVRef.current = 0
  }, [])

  const startMomentum = useCallback(
    (initialVPxPerMs: number) => {
      stopMomentum()
      let v = Math.max(
        -MOMENTUM_MAX_SPEED,
        Math.min(MOMENTUM_MAX_SPEED, initialVPxPerMs),
      )
      if (Math.abs(v) < MOMENTUM_MIN_SPEED) return

      glideVRef.current = v
      lastGlideTRef.current = performance.now()

      const step = (now: number) => {
        const el = viewportRef.current
        if (!el) {
          momentumRafRef.current = 0
          return
        }

        const rawDt = now - lastGlideTRef.current
        const dt = Math.min(Math.max(rawDt, 0), 48)
        lastGlideTRef.current = now

        v = glideVRef.current
        if (Math.abs(v) < MOMENTUM_STOP_SPEED) {
          momentumRafRef.current = 0
          glideVRef.current = 0
          return
        }

        el.scrollLeft += v * dt
        syncAndUpdateScales()

        v *= Math.pow(FRICTION_BASE, dt / 16.67)
        glideVRef.current = v

        momentumRafRef.current = requestAnimationFrame(step)
      }

      momentumRafRef.current = requestAnimationFrame(step)
    },
    [stopMomentum, syncAndUpdateScales],
  )

  useEffect(() => () => stopMomentum(), [stopMomentum])

  const consumeReleaseVelocity = useCallback(() => {
    const arr = velocitySamplesRef.current
    velocitySamplesRef.current = []

    if (!arr.length) return 0

    let sum = 0
    let n = 0
    for (const s of arr) {
      if (s.dt <= 0) continue
      sum += -s.dx / s.dt
      n += 1
    }
    return n > 0 ? sum / n : 0
  }, [])

  const onPointerDown = (e: ReactPointerEvent) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return

    stopMomentum()

    const el = viewportRef.current
    if (!el) return

    const now = performance.now()
    lastSampleRef.current = { x: e.clientX, t: now }
    velocitySamplesRef.current = []

    dragRef.current = {
      active: true,
      dragging: false,
      pointerId: e.pointerId,
      startX: e.clientX,
      startScroll: el.scrollLeft,
    }
    suppressClickRef.current = false
    /* Defer setPointerCapture until DRAG_THRESHOLD_PX so <a> tags receive click when the user doesn’t drag. */
  }

  const onPointerMove = (e: ReactPointerEvent) => {
    const d = dragRef.current
    if (!d.active || e.pointerId !== d.pointerId) return
    const el = viewportRef.current
    if (!el) return

    const rawDx = e.clientX - d.startX

    if (!d.dragging) {
      if (Math.abs(rawDx) < DRAG_THRESHOLD_PX) return
      d.dragging = true
      suppressClickRef.current = true
      setDragging(true)
      try {
        el.setPointerCapture(e.pointerId)
      } catch {
        /* capture unavailable */
      }
      velocitySamplesRef.current = []
      lastSampleRef.current = { x: e.clientX, t: performance.now() }
    }

    const now = performance.now()
    const prev = lastSampleRef.current
    const dt = now - prev.t
    if (dt > 0 && dt < 120) {
      const dx = e.clientX - prev.x
      velocitySamplesRef.current.push({ dx, dt })
      if (velocitySamplesRef.current.length > VELOCITY_SAMPLE_CAP) {
        velocitySamplesRef.current.shift()
      }
    }
    lastSampleRef.current = { x: e.clientX, t: now }

    el.scrollLeft = d.startScroll - (e.clientX - d.startX)
    syncAndUpdateScales()
  }

  const finalizePointer = (pointerId: number, releaseCapture: boolean) => {
    const d = dragRef.current
    if (!d.active || pointerId !== d.pointerId) return

    const v = d.dragging ? consumeReleaseVelocity() : 0

    dragRef.current = {
      active: false,
      dragging: false,
      pointerId: -1,
      startX: 0,
      startScroll: 0,
    }
    setDragging(false)

    if (releaseCapture && d.dragging) {
      try {
        viewportRef.current?.releasePointerCapture(pointerId)
      } catch {
        /* already released */
      }
    }

    if (d.dragging) {
      startMomentum(v)
    }
  }

  const onPointerUp = (e: ReactPointerEvent) => {
    finalizePointer(e.pointerId, true)
  }

  const onLostPointerCapture = (e: ReactPointerEvent) => {
    finalizePointer(e.pointerId, false)
  }

  const onClickCapture = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) return
    e.preventDefault()
    e.stopPropagation()
    suppressClickRef.current = false
  }

  return (
    <Viewport
      ref={viewportRef}
      $dragging={dragging}
      aria-label="Work carousel"
      onScroll={syncAndUpdateScales}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onLostPointerCapture={onLostPointerCapture}
      onClickCapture={onClickCapture}
    >
      <Track ref={trackRef}>
        {Array.from({ length: SET_COUNT }, (_, setIdx) => (
          <Set
            key={setIdx}
            ref={setIdx === 0 ? firstSetRef : undefined}
            aria-hidden={setIdx > 0 ? true : undefined}
          >
            {items.map((child, i) => (
              <CardScaleSlot
                key={`${setIdx}-${i}`}
                data-carousel-scale-slot
              >
                {cloneElement(child)}
              </CardScaleSlot>
            ))}
          </Set>
        ))}
      </Track>
    </Viewport>
  )
}
