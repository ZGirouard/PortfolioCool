import styled from '@emotion/styled'

const Background = styled.div`
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

export function HomePage() {
  return <Background as="main" aria-label="Home" />
}
