import styled from '@emotion/styled'
import { WorkCard } from '../components/WorkCard'
import { WorkCarousel } from '../components/WorkCarousel'
import { workProjectMeta } from '../data/workProjects'

const DimOverlay = styled.div`
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

const Shell = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  overscroll-behavior: none;
  background-color: #000;
  background-image: url('/train_station.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:has([data-work-card]:hover) > [data-home-dim],
  &:has([data-work-card]:focus-within) > [data-home-dim] {
    background: rgba(0, 0, 0, 0.42);
  }
`

export function HomePage() {
  return (
    <Shell aria-label="Home">
      <DimOverlay data-home-dim aria-hidden />
      <WorkCarousel>
        <WorkCard
          to="/work/kiewit"
          title={workProjectMeta.kiewit.title}
          backgroundColor="#FFD200"
          imageSrc="/Kiewit.png"
          imageAlt="Kiewit"
        />
        <WorkCard
          to="/work/aviture"
          title={workProjectMeta.aviture.title}
          backgroundColor="#F03B34"
          imageSrc="/Aviture.png"
          imageAlt="Aviture"
        />
        <WorkCard
          to="/work/unl"
          title={workProjectMeta.unl.title}
          backgroundColor="#E31937"
          imageSrc="/UNL.png"
          imageAlt="University of Nebraska–Lincoln"
        />
      </WorkCarousel>
    </Shell>
  )
}
