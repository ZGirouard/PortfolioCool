import styled from '@emotion/styled'
import { BasicText } from '../components/BasicText'
import { WorkCard } from '../components/WorkCard'
import { WorkCarousel } from '../components/WorkCarousel'

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
`

const BottomRow = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.5rem 1.5rem 1.25rem;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`

export function HomePage() {
  return (
    <Shell aria-label="Home">
      <WorkCarousel>
        <WorkCard
          backgroundColor="#FFD200"
          imageSrc="/Kiewit.png"
          imageAlt="Kiewit"
        />
        <WorkCard
          backgroundColor="#F03B34"
          imageSrc="/Aviture.png"
          imageAlt="Aviture"
        />
        <WorkCard
          backgroundColor="#E31937"
          imageSrc="/UNL.png"
          imageAlt="University of Nebraska–Lincoln"
        />
      </WorkCarousel>
      <BottomRow>
        <BasicText>Zach Girouard</BasicText>
        <BasicText>Menu</BasicText>
      </BottomRow>
    </Shell>
  )
}
