import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { AboutPage } from './pages/About'
import { HomePage } from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}
