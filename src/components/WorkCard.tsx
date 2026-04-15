import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;
`

const Card = styled.div<{ $backgroundColor: string }>`
  width: 440px;
  height: 300px;
  flex-shrink: 0;
  background-color: ${(p) => p.$backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transform-origin: center center;
  box-shadow:
    0 14px 32px rgba(0, 0, 0, 0.28),
    0 4px 10px rgba(0, 0, 0, 0.18);
  transition:
    transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.32s cubic-bezier(0.22, 1, 0.36, 1);

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 0.01ms;
  }
`

const TitleLabel = styled.span`
  max-width: min(440px, 92vw);
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.05rem, 2.2vw, 1.45rem);
  font-weight: 400;
  letter-spacing: 0.04em;
  color: #fff;
  text-shadow:
    0 2px 14px rgba(0, 0, 0, 0.55),
    0 0 1px rgba(0, 0, 0, 0.85);
  line-height: 1.2;
  opacity: 0;
  transform: translateY(6px);
  transition:
    opacity 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 0.01ms;
  }
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

  &:hover [data-work-card-face],
  &:focus-visible [data-work-card-face] {
    transform: scale(1.056);
    box-shadow:
      0 22px 44px rgba(0, 0, 0, 0.38),
      0 8px 18px rgba(0, 0, 0, 0.22);
  }

  &:hover [data-work-card-title],
  &:focus-visible [data-work-card-title] {
    opacity: 1;
    transform: translateY(0);
  }
`

const StaticWrap = styled.div`
  flex-shrink: 0;
  -webkit-user-drag: none;
  user-select: none;

  &:hover [data-work-card-face],
  &:focus-within [data-work-card-face] {
    transform: scale(1.056);
    box-shadow:
      0 22px 44px rgba(0, 0, 0, 0.38),
      0 8px 18px rgba(0, 0, 0, 0.22);
  }

  &:hover [data-work-card-title],
  &:focus-within [data-work-card-title] {
    opacity: 1;
    transform: translateY(0);
  }
`

export type WorkCardProps = {
  backgroundColor: string
  imageSrc: string
  imageAlt: string
  /** Shown under the card on hover/focus (e.g. project title). */
  title?: string
  /** When set, the whole card navigates to this route. */
  to?: string
}

export function WorkCard({
  backgroundColor,
  imageSrc,
  imageAlt,
  title,
  to,
}: WorkCardProps) {
  const card = (
    <Card $backgroundColor={backgroundColor} data-work-card-face="">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={200}
        height={200}
        draggable={false}
      />
    </Card>
  )

  const body = (
    <Stack>
      {card}
      {title ? <TitleLabel data-work-card-title="">{title}</TitleLabel> : null}
    </Stack>
  )

  if (to) {
    return (
      <CardLink to={to} draggable={false} data-work-card="">
        {body}
      </CardLink>
    )
  }

  return (
    <StaticWrap data-work-card={title ? '' : undefined}>{body}</StaticWrap>
  )
}
