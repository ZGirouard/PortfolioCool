import {
  useCallback,
  useEffect,
  useId,
  useState,
  type FocusEvent as ReactFocusEvent,
} from 'react'
import {
  WORK_PROJECT_SLUGS,
  type WorkProjectSlug,
  workProjectMeta,
} from '../data/workProjects'
import {
  Shell,
  Inner,
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
import { Tagline } from './ContactPage.styles'
import { PageTitle } from '../styles/PageShared.styles'

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

function useWorkHoverPreviewActive() {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(min-width: 720px)').matches
      : false,
  )

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 720px)')
    const apply = () => setMatches(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  return matches
}

export function WorkIndexPage() {
  const baseId = useId()
  const hoverPreviewEnabled = useWorkHoverPreviewActive()
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
        <Tagline>Below are some of the projects I've worked on. Feel free to explore each one to learn more about my work!</Tagline>
        <List>
          {WORK_PROJECT_SLUGS.map((slug: WorkProjectSlug) => {
            const meta = workProjectMeta[slug]
            const rowId = `${baseId}-${slug}`
            const active = openPreview === slug

            return (
              <Row
                key={slug}
                {...(hoverPreviewEnabled
                  ? {
                      onMouseEnter: () => show(slug),
                      onMouseLeave: hide,
                      onFocusCapture: () => show(slug),
                      onBlurCapture: (e: ReactFocusEvent<HTMLLIElement>) => {
                        if (
                          !e.currentTarget.contains(
                            e.relatedTarget as Node | null,
                          )
                        ) {
                          hide()
                        }
                      },
                    }
                  : {})}
              >
                <RowTop>
                  <IconWrap aria-hidden>
                    <IconImg src={meta.iconSrc} alt="" />
                  </IconWrap>
                  <ProjectLink id={rowId} to={`/work/${slug}`}>
                    {meta.title}
                  </ProjectLink>
                </RowTop>
                {hoverPreviewEnabled ? (
                  <RowPreview slug={slug} active={active} labelledBy={rowId} />
                ) : null}
              </Row>
            )
          })}
        </List>
        <Hint>
          {hoverPreviewEnabled
            ? 'Hover a project for a live preview, or follow the link to open it.'
            : 'Tap a project to open it.'}
        </Hint>
      </Inner>
    </Shell>
  )
}
