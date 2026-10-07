import { useState } from 'react'
import Navbar from './html/Navbar'
import HomePage from './html/HomePage'
import ProfilePage from './html/ProfilePage'
import HistoryPage from './html/HistoryPage'
import VisionMissionPage from './html/VisionMissionPage'
import ProgramPage from './html/ProgramPage'
import FacilityPage from './html/FacilityPage'
import TeacherPage from './html/TeacherPage'
import GalleryPage from './html/GalleryPage'
import SpmbPage from './html/SpmbPage'
import Footer from './html/Footer'
import './css/navbar.css'
import './css/footer.css'
import './css/tk-theme.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const handleSelectSection = (id) => {
    if (id === 'contact') {
      document.getElementById('site-footer')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    setActiveSection(id)
  }

  const pageMap = {
    home: <HomePage onNavigate={handleSelectSection} />,
    profil: <ProfilePage />,
    sejarah: <HistoryPage />,
    'visi-misi': <VisionMissionPage />,
    program: <ProgramPage />,
    fasilitas: <FacilityPage />,
    guru: <TeacherPage />,
    kegiatan: <GalleryPage />,
    spmb: <SpmbPage />,
  }

  return (
    <div className="page-shell">
      <Navbar activeSection={activeSection} onSelect={handleSelectSection} />
      <main className="page-main">{pageMap[activeSection]}</main>
      <Footer onNavigate={handleSelectSection} />
    </div>
  )
}

export default App
