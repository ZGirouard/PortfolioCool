import { Card, Image, TitleLabel, Stack, CardLink, StaticWrap } from './WorkCard.styles'

export type WorkCardProps = {
  backgroundColor: string
  imageSrc: string
  imageAlt: string
  title?: string
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
