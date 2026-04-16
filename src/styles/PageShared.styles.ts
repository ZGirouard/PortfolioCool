import styled from '@emotion/styled'

export const BOTTOM_SAFE_LARGE = '7rem'

export const PageShell = styled.main`
  --page-bottom-safe: ${BOTTOM_SAFE_LARGE};
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: #0a0a0c;
  color: #f5f5f5;
  padding: 1.75rem 1.25rem var(--page-bottom-safe);
`

export const PageTitle = styled.h1`
  margin: 0 0 0.65rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.25rem, 6vw, 3.75rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: 0.02em;
  color: #fff;
`

export const PageTagline = styled.p`
  margin: 0;
  max-width: 40rem;
  font-family: Bebas Neue, sans-serif;
  font-size: clamp(0.95rem, 2.2vw, 1.05rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.72);
`
