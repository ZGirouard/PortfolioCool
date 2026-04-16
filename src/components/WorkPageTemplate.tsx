import type { ReactNode } from 'react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shell, Header, BackButton, Title, Tagline, Body } from './WorkPageTemplate.styles'
import styled from '@emotion/styled'

export type MosaicCellProps = {
  children?: ReactNode
  colSpan?: number
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
