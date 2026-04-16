import styled from "@emotion/styled"

export const Viewport = styled.div<{ $dragging: boolean }>`
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

export const Track = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 100px;
  width: max-content;
`

export const Set = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 100px;
  flex-shrink: 0;
`

export const CardScaleSlot = styled.div`
  flex-shrink: 0;
  transform-origin: center center;
  will-change: transform;
`