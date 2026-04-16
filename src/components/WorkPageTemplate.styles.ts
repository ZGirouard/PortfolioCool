import styled from "@emotion/styled"
import {
  BOTTOM_SAFE_LARGE,
  PageShell,
  PageTagline,
  PageTitle,
} from "../styles/PageShared.styles"

export const Shell = styled(PageShell)`
  --page-bottom-safe: ${BOTTOM_SAFE_LARGE};
`

export const Header = styled.header`
  max-width: 56rem;
  margin: 0 auto 2rem;
`

export const BackButton = styled.button`
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

export const Title = PageTitle

export const Tagline = styled(PageTagline)`
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(0.95rem, 2.2vw, 1.1rem);
  font-weight: 400;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.25rem, 3vw, 2rem);
  max-width: 72rem;
  margin: 0 auto;
  width: 100%;
`

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
