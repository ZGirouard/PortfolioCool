import {
  MosaicCell,
  MosaicGrid,
  WorkPageDescription,
} from '../../components/WorkPageTemplate'

function MosaicImg({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} loading="lazy" decoding="async" />
}

export function KiewitProjectBody() {
  return (
    <>
      <MosaicGrid aria-label="Kiewit work samples">
        <MosaicCell colSpan={12} rowSpan={3}>
          <MosaicImg src="/Kiewit.png" alt="Kiewit" />
        </MosaicCell>
        <MosaicCell colSpan={5} rowSpan={3}>
          <MosaicImg src="/Kiewit.png" alt="" />
        </MosaicCell>
        <MosaicCell colSpan={7} rowSpan={3}>
          <MosaicImg src="/Kiewit.png" alt="" />
        </MosaicCell>
      </MosaicGrid>

      <WorkPageDescription>
        <p>
          Placeholder narrative for this engagement—replace with outcomes, scope, and tech
          stack. Highlight delivery in a regulated or high-stakes environment if that fits
          your story.
        </p>
      </WorkPageDescription>

      <MosaicGrid aria-label="More Kiewit imagery">
        <MosaicCell colSpan={4} rowSpan={2}>
          <MosaicImg src="/Kiewit.png" alt="" />
        </MosaicCell>
        <MosaicCell colSpan={4} rowSpan={2}>
          <MosaicImg src="/Kiewit.png" alt="" />
        </MosaicCell>
        <MosaicCell colSpan={4} rowSpan={2}>
          <MosaicImg src="/Kiewit.png" alt="" />
        </MosaicCell>
      </MosaicGrid>
    </>
  )
}

export function AvitureProjectBody() {
  return (
    <>
      <MosaicGrid aria-label="Aviture work samples">
        <MosaicCell colSpan={7} rowSpan={3}>
          <MosaicImg src="/Aviture.png" alt="Aviture" />
        </MosaicCell>
        <MosaicCell colSpan={5} rowSpan={3}>
          <MosaicImg src="/Aviture.png" alt="" />
        </MosaicCell>
        <MosaicCell colSpan={12} rowSpan={2}>
          <MosaicImg src="/Aviture.png" alt="" />
        </MosaicCell>
      </MosaicGrid>

      <WorkPageDescription>
        <p>
          Placeholder narrative—swap in how you partnered with product, APIs you owned, and
          what shipped to users. Good spot for a short list of responsibilities or
          outcomes.
        </p>
      </WorkPageDescription>

      <MosaicGrid aria-label="More Aviture imagery">
        <MosaicCell colSpan={6} rowSpan={3}>
          <MosaicImg src="/Aviture.png" alt="" />
        </MosaicCell>
        <MosaicCell colSpan={6} rowSpan={3}>
          <MosaicImg src="/Aviture.png" alt="" />
        </MosaicCell>
      </MosaicGrid>
    </>
  )
}

export function UNLProjectBody() {
  return (
    <>
      <MosaicGrid aria-label="UNL work samples">
        <MosaicCell colSpan={12} rowSpan={2}>
          <MosaicImg src="/UNL.png" alt="University of Nebraska–Lincoln" />
        </MosaicCell>
        <MosaicCell colSpan={6} rowSpan={3}>
          <MosaicImg src="/UNL.png" alt="" />
        </MosaicCell>
        <MosaicCell colSpan={6} rowSpan={3}>
          <MosaicImg src="/UNL.png" alt="" />
        </MosaicCell>
      </MosaicGrid>

      <WorkPageDescription>
        <p>
          Placeholder narrative—mention accessibility, content strategy, or design system
          work if applicable. This band is for context between image groups.
        </p>
      </WorkPageDescription>

      <MosaicGrid aria-label="More UNL imagery">
        <MosaicCell colSpan={4} rowSpan={2}>
          <MosaicImg src="/UNL.png" alt="" />
        </MosaicCell>
        <MosaicCell colSpan={4} rowSpan={2}>
          <MosaicImg src="/UNL.png" alt="" />
        </MosaicCell>
        <MosaicCell colSpan={4} rowSpan={2}>
          <MosaicImg src="/UNL.png" alt="" />
        </MosaicCell>
      </MosaicGrid>
    </>
  )
}
