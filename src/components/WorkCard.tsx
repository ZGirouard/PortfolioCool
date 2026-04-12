import styled from '@emotion/styled'

const Card = styled.div<{ $backgroundColor: string }>`
  width: 440px;
  height: 300px;
  flex-shrink: 0;
  background-color: ${(p) => p.$backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  display: block;
`

export type WorkCardProps = {
  backgroundColor: string
  imageSrc: string
  imageAlt: string
}

export function WorkCard({
  backgroundColor,
  imageSrc,
  imageAlt,
}: WorkCardProps) {
  return (
    <Card $backgroundColor={backgroundColor}>
      <Image src={imageSrc} alt={imageAlt} width={200} height={200} />
    </Card>
  )
}
