import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Card = styled.div<{ $backgroundColor: string }>`
  width: 440px;
  height: 300px;
  flex-shrink: 0;
  background-color: ${(p) => p.$backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  box-shadow:
    0 14px 32px rgba(0, 0, 0, 0.28),
    0 4px 10px rgba(0, 0, 0, 0.18);
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  display: block;
  -webkit-user-drag: none;
  user-select: none;
  -webkit-user-select: none;
  pointer-events: none;
`

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  flex-shrink: 0;
  -webkit-user-drag: none;
  user-select: none;
`

export type WorkCardProps = {
  backgroundColor: string
  imageSrc: string
  imageAlt: string
  /** When set, the whole card navigates to this route. */
  to?: string
}

export function WorkCard({
  backgroundColor,
  imageSrc,
  imageAlt,
  to,
}: WorkCardProps) {
  const card = (
    <Card $backgroundColor={backgroundColor}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={200}
        height={200}
        draggable={false}
      />
    </Card>
  )

  if (to) {
    return (
      <CardLink to={to} draggable={false}>
        {card}
      </CardLink>
    )
  }

  return card
}
