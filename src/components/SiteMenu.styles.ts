import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

export const MenuRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const MenuButton = styled.button`
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

export const Panel = styled.nav<{ $open: boolean }>`
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

export const DIM = 0.48

export const MenuLink = styled(NavLink)`
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