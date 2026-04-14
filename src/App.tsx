import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/Home'
import { WorkIndexPage } from './pages/WorkIndexPage'
import { WorkProjectPage } from './pages/WorkProjectPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkIndexPage />} />
        <Route path="/work/:project" element={<WorkProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
