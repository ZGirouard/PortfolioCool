import { Navigate, useParams } from 'react-router-dom'
import { WorkPageTemplate } from '../components/WorkPageTemplate'
import { isWorkProjectSlug, workProjectMeta } from '../data/workProjects'
import {
  AvitureProjectBody,
  KiewitProjectBody,
  UNLProjectBody,
} from './work/WorkProjectContents'

const bodies = {
  kiewit: KiewitProjectBody,
  aviture: AvitureProjectBody,
  unl: UNLProjectBody,
} as const

export function WorkProjectPage() {
  const { project } = useParams<{ project: string }>()
  if (!isWorkProjectSlug(project)) {
    return <Navigate to="/work" replace />
  }

  const meta = workProjectMeta[project]
  const Body = bodies[project]

  return (
    <WorkPageTemplate title={meta.title} tagline={meta.tagline}>
      <Body />
    </WorkPageTemplate>
  )
}
