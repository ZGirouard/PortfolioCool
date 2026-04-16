import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import {
  BOTTOM_SAFE_LARGE,
  PageShell,
  PageTitle as SharedPageTitle,
} from "../styles/PageShared.styles"

export const Shell = styled(PageShell)`
  --page-bottom-safe: ${BOTTOM_SAFE_LARGE};
`

export const Inner = styled.div`
  max-width: 56rem;
  margin: 0 auto;
`

export const PageTitle = styled(SharedPageTitle)`
  margin-bottom: 1.5rem;
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`

export const Row = styled.li`
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  &:first-of-type {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }
`

export const RowTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: clamp(0.75rem, 2vw, 1.1rem);
  min-height: 4.25rem;
  padding: 0.5rem 0;

  @media (min-width: 720px) {
    padding-right: min(48%, 26rem);
  }
`

export const IconWrap = styled.div`
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
`

export const IconImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  display: block;
  pointer-events: none;
  user-select: none;
`

export const ProjectLink = styled(Link)`
  flex: 1;
  min-width: 0;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.35rem, 3.8vw, 2rem);
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.02em;
  line-height: 1.15;
  transition:
    color 0.22s ease,
    text-shadow 0.22s ease;

  &:hover,
  &:focus-visible {
    color: #fff;
    text-shadow:
      0 0 24px rgba(255, 255, 255, 0.35),
      0 0 48px rgba(255, 255, 255, 0.12);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 6px;
    border-radius: 2px;
  }
`

export const PreviewLayer = styled.div<{ $active: boolean }>`
  pointer-events: ${(p) => (p.$active ? 'auto' : 'none')};
  opacity: ${(p) => (p.$active ? 1 : 0)};
  transform: translateY(${(p) => (p.$active ? 0 : '6px')}) scale(${(p) => (p.$active ? 1 : 0.98)});
  transition:
    opacity 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 719px) {
    position: relative;
    width: 100%;
    max-height: ${(p) => (p.$active ? '220px' : 0)};
    margin-bottom: ${(p) => (p.$active ? '0.35rem' : 0)};
    overflow: hidden;
    transition:
      opacity 0.28s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
      max-height 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }

  @media (min-width: 720px) {
    position: absolute;
    right: 0;
    top: 50%;
    width: min(100%, 24rem);
    height: 15rem;
    margin-top: -7.5rem;
    z-index: 5;
  }
`

export const PreviewChrome = styled.div`
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.14) 0%,
    rgba(255, 255, 255, 0.04) 45%,
    rgba(0, 0, 0, 0.35) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.45) inset,
    0 28px 70px rgba(0, 0, 0, 0.55),
    0 0 60px rgba(120, 160, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`

export const PreviewFrame = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 36px);
  margin-top: 36px;
  background: #050508;
`

export const PreviewTopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
  background: rgba(0, 0, 0, 0.55);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 2;
`

export const FakeDots = styled.div`
  display: flex;
  gap: 6px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.18);
  }
`

export const PreviewLabel = styled.span`
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin-left: auto;
`

export const LiveIframe = styled.iframe`
  display: block;
  width: 200%;
  height: 200%;
  border: 0;
  transform: scale(0.5);
  transform-origin: 0 0;
  pointer-events: none;
  background: #0a0a0c;
`

export const Hint = styled.p`
  margin: 1.25rem 0 0;
  max-width: 36rem;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.55);
`