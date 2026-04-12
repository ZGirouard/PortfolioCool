import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/Home'
import { WorkPage } from './pages/WorkPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
