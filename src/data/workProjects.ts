export const WORK_PROJECT_SLUGS = ['kiewit', 'aviture', 'unl'] as const

export type WorkProjectSlug = (typeof WORK_PROJECT_SLUGS)[number]

export function isWorkProjectSlug(s: string | undefined): s is WorkProjectSlug {
  return s !== undefined && WORK_PROJECT_SLUGS.includes(s as WorkProjectSlug)
}

export const workProjectMeta: Record<
  WorkProjectSlug,
  { title: string; tagline: string; iconSrc: string; iconAlt: string }
> = {
  kiewit: {
    title: 'Kiewit',
    tagline:
      'Engineering and construction at scale—internal tools and customer-facing experiences that keep crews, partners, and operations aligned.',
    iconSrc: '/Kiewit.png',
    iconAlt: 'Kiewit',
  },
  aviture: {
    title: 'Aviture',
    tagline:
      'Custom software and product delivery—from discovery through ship—in cross-functional teams of designers and engineers.',
    iconSrc: '/Aviture.png',
    iconAlt: 'Aviture',
  },
  unl: {
    title: 'University of Nebraska–Lincoln',
    tagline:
      'Higher-ed digital work: accessible, student-first interfaces and durable patterns across campus web properties.',
    iconSrc: '/UNL.png',
    iconAlt: 'University of Nebraska–Lincoln',
  },
}
