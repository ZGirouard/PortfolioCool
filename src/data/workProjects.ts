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
      'Cloud cost and utilization monitoring application built for Kiewit, designed to give product teams direct visibility into underutilized or orphaned resources.',
    iconSrc: '/Kiewit.png',
    iconAlt: 'Kiewit',
  },
  aviture: {
    title: 'Aviture',
    tagline:
      'Recruiting software development for the U.S. Air Force, focusing on front-end development, UX refinement, and data integration.',
    iconSrc: '/Aviture.png',
    iconAlt: 'Aviture',
  },
  unl: {
    title: 'University of Nebraska–Lincoln',
    tagline:
      'Web development and UX design for the University of Nebraska-Lincoln, creating accessible, student-first interfaces and durable patterns across campus web properties.',
    iconSrc: '/UNL.png',
    iconAlt: 'University of Nebraska–Lincoln',
  },
}
