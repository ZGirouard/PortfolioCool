import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MenuRoot, MenuButton, Panel, MenuLink } from './SiteMenu.styles'

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
