import styled from '@emotion/styled'

const Shell = styled.main`
  min-height: 100%;
  height: 100%;
  background: #0f1014;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px;
`

export function WorkPage() {
  return <Shell aria-label="Work">Work</Shell>
}
