import styled from '@emotion/styled'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const MenuRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const MenuButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: #fff;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  user-select: none;
  -webkit-user-select: none;

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 4px;
  }
`

const Panel = styled.nav<{ $open: boolean }>`
  position: absolute;
  right: 0;
  bottom: calc(100% + 14px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;

  opacity: ${(p) => (p.$open ? 1 : 0)};
  transform: translateY(${(p) => (p.$open ? 0 : 10)}px);
  pointer-events: ${(p) => (p.$open ? 'auto' : 'none')};
  visibility: ${(p) => (p.$open ? 'visible' : 'hidden')};

  transition:
    opacity 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    visibility 0s linear ${(p) => (p.$open ? '0s' : '0.34s')};
`

const DIM = 0.48

const MenuLink = styled(NavLink)`
  color: #fff;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.26s cubic-bezier(0.22, 1, 0.36, 1);

  opacity: 1;

  &[aria-current='page'] {
    opacity: ${DIM};
  }

  &:not([aria-current='page']):hover,
  &:not([aria-current='page']):focus-visible {
    opacity: ${DIM};
  }

  &[aria-current='page']:hover,
  &[aria-current='page']:focus-visible {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 4px;
  }
`

export function SiteMenu() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const panelId = useId()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    const onPointerDown = (e: PointerEvent) => {
      const root = rootRef.current
      if (root && !root.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  const toggle = useCallback(() => {
    setOpen((v) => !v)
  }, [])

  return (
    <MenuRoot ref={rootRef}>
      <MenuButton
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={toggle}
      >
        Menu
      </MenuButton>
      <Panel id={panelId} $open={open} aria-label="Site">
        <MenuLink to="/" end onClick={() => setOpen(false)}>
          Home
        </MenuLink>
        <MenuLink to="/work" onClick={() => setOpen(false)}>
          Work
        </MenuLink>
        <MenuLink to="/contact" onClick={() => setOpen(false)}>
          Contact
        </MenuLink>
      </Panel>
    </MenuRoot>
  )
}
