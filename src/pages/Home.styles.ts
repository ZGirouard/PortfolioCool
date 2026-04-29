import styled from "@emotion/styled"

export const DimOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  pointer-events: none;
  transition: background 0.32s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 0;

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 0.01ms;
  }
`

export const Shell = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  overscroll-behavior: none;
  background-color: #000;
  background-image: url('/train_station.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:has([data-work-card]:hover) > [data-home-dim],
  &:has([data-work-card]:focus-within) > [data-home-dim] {
    background: rgba(0, 0, 0, 0.42);
  }
`

export const CarouselHint = styled.p`
  position: absolute;
  z-index: 2;
  pointer-events: none;
  margin: 0;
  max-width: min(26rem, calc(100% - 2.5rem));
  left: 50%;
  transform: translateX(-50%);
  top: calc(50% - 100px + clamp(11.5rem, 28vh, 14rem));
  padding: 0;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1rem, 2.1vw, 1.35rem);
  line-height: 1.35;
  letter-spacing: 0.04em;
  text-align: center;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.88);
  text-shadow:
    0 1px 18px rgba(0, 0, 0, 0.75),
    0 2px 32px rgba(0, 0, 0, 0.45);

  @media (max-width: 680px) {
    top: calc(50% - 100px + clamp(10.5rem, 26vh, 13rem));
  }
`