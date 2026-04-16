import { WorkCard } from '../components/WorkCard'
import { WorkCarousel } from '../components/WorkCarousel'
import { workProjectMeta } from '../data/workProjects'
import { Shell, DimOverlay } from './Home.styles'

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
