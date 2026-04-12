import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Title = styled.h1`
  margin: 0 0 0.5rem;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  letter-spacing: -0.03em;
`

const Lead = styled.p`
  margin: 0 0 1.5rem;
  max-width: 40ch;
  color: var(--text);
`

const Card = styled.section`
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--social-bg);
  text-align: left;
`

export function HomePage() {
  return (
    <div>
      <Title
        css={css`
          color: var(--text-h);
        `}
      >
        React + Vite + Emotion
      </Title>
      <Lead>
        This app uses TypeScript, Emotion (`styled` and the `css` prop), and
        React Router. Replace this page with your portfolio content.
      </Lead>
      <Card>
        <strong>Edit</strong> <code>src/pages/Home.tsx</code> to get started.
      </Card>
    </div>
  )
}
