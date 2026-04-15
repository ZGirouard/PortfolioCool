import styled from '@emotion/styled'
import type { ReactNode } from 'react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const BOTTOM_SAFE = '7rem'

const Shell = styled.main`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: #0a0a0c;
  color: #f5f5f5;
  padding: 1.75rem 1.25rem ${BOTTOM_SAFE};
`

const Header = styled.header`
  max-width: 56rem;
  margin: 0 auto 2rem;
`

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.95rem;
  padding: 0.35rem 0.65rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 0.92rem;
  line-height: 1;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.45);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.9);
    outline-offset: 2px;
  }
`

const Title = styled.h1`
  margin: 0 0 0.65rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.25rem, 6vw, 3.75rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: 0.02em;
  color: #fff;
`

const Tagline = styled.p`
  margin: 0;
  max-width: 40rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(0.95rem, 2.2vw, 1.1rem);
  font-weight: 400;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.72);
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.25rem, 3vw, 2rem);
  max-width: 72rem;
  margin: 0 auto;
  width: 100%;
`

/** One mosaic “band”: only `MosaicCell` items belong inside. Stack multiple grids and separate them with `WorkPageDescription`. */
export const MosaicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: minmax(72px, auto);
  gap: clamp(0.5rem, 1.5vw, 0.85rem);
  width: 100%;
`

export const WorkPageDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 3vw, 1.5rem);
  max-width: 56rem;
  margin: 0 auto;
`
/** Prose between mosaic rows—paragraphs, lists, or short headings. */
export const WorkPageDescription = styled.div`
  box-sizing: border-box;
  max-width: 56rem;
  width: 100%;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.8);

  p {
    margin: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }

  ul,
  ol {
    margin: 0 0 1rem;
    padding-left: 1.25rem;
  }

  li {
    margin-bottom: 0.35rem;
  }
`

export const WorkPageDescriptionTitle = styled.h2`
  margin: 0;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 400;
  letter-spacing: 0.02em;
  color: #fff;
`
export type MosaicCellProps = {
  children?: ReactNode
  /** Number of columns (of 12) this cell spans. */
  colSpan?: number
  /** Number of implicit row tracks this cell spans. */
  rowSpan?: number
}

const Cell = styled.div<{
  $colSpan: number
  $rowSpan: number
}>`
  grid-column: span ${(p) => p.$colSpan};
  grid-row: span ${(p) => p.$rowSpan};
  min-height: 0;
  border-radius: 6px;
  overflow: hidden;
  background: #14151a;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export type WorkPageTemplateProps = {
  title: ReactNode
  tagline: ReactNode
  children: ReactNode
}

export function WorkPageTemplate({ title, tagline, children }: WorkPageTemplateProps) {
  const navigate = useNavigate()

  const goBack = useCallback(() => {
    if (window.history.length > 1) {
      navigate(-1)
      return
    }
    navigate('/work')
  }, [navigate])

  return (
    <Shell aria-label="Work project">
      <Header>
        <BackButton type="button" onClick={goBack} aria-label="Go back">
          <span aria-hidden>←</span> Back
        </BackButton>
        <Title>{title}</Title>
        <Tagline>{tagline}</Tagline>
      </Header>
      <Body>{children}</Body>
    </Shell>
  )
}

export function MosaicCell({ children, colSpan = 6, rowSpan = 2 }: MosaicCellProps) {
  const c = Math.min(12, Math.max(1, colSpan))
  const r = Math.max(1, rowSpan)
  return (
    <Cell $colSpan={c} $rowSpan={r}>
      {children}
    </Cell>
  )
}
