import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, Outlet, useLocation, useNavigationType } from 'react-router-dom'
import { BasicText } from './BasicText'
import { SiteMenu } from './SiteMenu'

const EASE = [0.22, 1, 0.36, 1] as const
const DURATION = 0.4
const BLUR_PX = 50

const pageVariants = {
  enter: (direction: number) => ({
    x: direction >= 0 ? '100%' : '-100%',
    filter: `blur(${BLUR_PX}px)`,
    opacity: 0.4,
    zIndex: 0,
  }),
  center: {
    x: 0,
    filter: 'blur(0px)',
    opacity: 1,
    zIndex: 0,
  },
  exit: (direction: number) => ({
    x: direction >= 0 ? '-100%' : '100%',
    filter: `blur(${BLUR_PX}px)`,
    opacity: 0.4,
    zIndex: 1,
  }),
}

const PageStage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;
`

const BottomBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.5rem 1.5rem 1.25rem;
  box-sizing: border-box;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`

const NameText = styled(BasicText)`
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`

const NameLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.85);
    outline-offset: 6px;
    border-radius: 4px;
  }
`

export function AppLayout() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const direction = navigationType === 'POP' ? -1 : 1

  return (
    <>
      <PageStage>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={location.pathname}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: DURATION, ease: EASE }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              willChange: 'transform, filter',
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </PageStage>
      <BottomBar>
        <NameLink to="/" aria-label="Go to home page">
          <NameText>Zach Girouard</NameText>
        </NameLink>
        <SiteMenu />
      </BottomBar>
    </>
  )
}
