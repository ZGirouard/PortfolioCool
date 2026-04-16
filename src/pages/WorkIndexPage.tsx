import { useCallback, useId, useState } from 'react'
import {
  WORK_PROJECT_SLUGS,
  type WorkProjectSlug,
  workProjectMeta,
} from '../data/workProjects'
import {
  Shell,
  Inner,
  PageTitle,
  List,
  Row,
  RowTop,
  IconWrap,
  IconImg,
  ProjectLink,
  PreviewLayer,
  PreviewChrome,
  PreviewTopBar,
  FakeDots,
  PreviewLabel,
  PreviewFrame,
  LiveIframe,
  Hint,
} from './WorkIndexPage.styles'

type RowPreviewProps = {
  slug: WorkProjectSlug
  active: boolean
  labelledBy: string
}

function RowPreview({ slug, active, labelledBy }: RowPreviewProps) {
  const src = `/work/${slug}`
  return (
    <PreviewLayer $active={active} role="region" aria-hidden={!active} aria-labelledby={labelledBy}>
      <PreviewChrome>
        <PreviewTopBar>
          <FakeDots aria-hidden>
            <span />
            <span />
            <span />
          </FakeDots>
          <PreviewLabel>Live preview</PreviewLabel>
        </PreviewTopBar>
        <PreviewFrame>
          {active ? (
            <LiveIframe
              title={`Preview of ${workProjectMeta[slug].title}`}
              src={src}
              tabIndex={-1}
            />
          ) : null}
        </PreviewFrame>
      </PreviewChrome>
    </PreviewLayer>
  )
}

export function WorkIndexPage() {
  const baseId = useId()
  const [openPreview, setOpenPreview] = useState<WorkProjectSlug | null>(null)

  const show = useCallback((slug: WorkProjectSlug) => {
    setOpenPreview(slug)
  }, [])

  const hide = useCallback(() => {
    setOpenPreview(null)
  }, [])

  return (
    <Shell aria-label="Work index">
      <Inner>
        <PageTitle>Work</PageTitle>
        <List>
          {WORK_PROJECT_SLUGS.map((slug: WorkProjectSlug) => {
            const meta = workProjectMeta[slug]
            const rowId = `${baseId}-${slug}`
            const active = openPreview === slug

            return (
              <Row
                key={slug}
                onMouseEnter={() => show(slug)}
                onMouseLeave={hide}
                onFocusCapture={() => show(slug)}
                onBlurCapture={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                    hide()
                  }
                }}
              >
                <RowTop>
                  <IconWrap aria-hidden>
                    <IconImg src={meta.iconSrc} alt="" />
                  </IconWrap>
                  <ProjectLink id={rowId} to={`/work/${slug}`}>
                    {meta.title}
                  </ProjectLink>
                </RowTop>
                <RowPreview slug={slug} active={active} labelledBy={rowId} />
              </Row>
            )
          })}
        </List>
        <Hint>Hover a project for a live preview, or follow the link to open it.</Hint>
      </Inner>
    </Shell>
  )
}
