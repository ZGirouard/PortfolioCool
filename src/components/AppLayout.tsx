import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { SiteMenu } from './SiteMenu'
import { PageStage, BottomBar, NameText, NameLink } from './AppLayout.styles'

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

export function AppLayout() {
  const location = useLocation()

  return (
    <>
      <PageStage>
        <AnimatePresence initial={false}>
          <motion.div
            key={location.pathname}
            custom={1}
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
