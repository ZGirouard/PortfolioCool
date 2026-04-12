import styled from '@emotion/styled'

const Title = styled.h1`
  margin: 0 0 0.75rem;
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--text-h);
`

const Body = styled.p`
  margin: 0;
  max-width: 50ch;
  line-height: 1.6;
`

export function AboutPage() {
  return (
    <div>
      <Title>About</Title>
      <Body>
        Add your bio, experience, and links here. Routes live under{' '}
        <code>src/pages/</code> and shared layout in{' '}
        <code>src/components/AppLayout.tsx</code>.
      </Body>
    </div>
  )
}
