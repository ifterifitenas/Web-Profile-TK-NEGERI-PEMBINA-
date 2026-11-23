import { useState } from 'react'
import schoolLogo from '../assets/Foto/LOGO.jpg'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'guru', label: 'Guru' },
  { id: 'kegiatan', label: 'Kegiatan' },
  { id: 'spmb', label: 'SPMB' },
]

const profileItems = [
  { id: 'sejarah', label: 'Sejarah' },
  { id: 'visi-misi', label: 'Visi & Misi' },
  { id: 'fasilitas', label: 'Fasilitas' },
]

export default function Navbar({ activeSection, onSelect }) {
  const [profileOpen, setProfileOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const profileIsActive = activeSection === 'profil' || profileItems.some((item) => item.id === activeSection)

  const selectItem = (id) => {
    onSelect(id)
    setProfileOpen(false)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="navbar-shell" aria-label="Navigasi utama">
      <div className="navbar-inner">
        <button className="brand-box" type="button" onClick={() => selectItem('home')}>
          <img className="brand-mark" src={schoolLogo} alt="" aria-hidden="true" />
          <span className="brand-copy">
            <span className="brand-name">TK NEGERI PEMBINA</span>
            <span className="brand-subtitle">Tumbuh, belajar, dan gembira</span>
          </span>
        </button>

        <button
          className={`navbar-menu-toggle${mobileMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          aria-expanded={mobileMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-list${mobileMenuOpen ? ' is-open' : ''}`} id="primary-navigation">
          <li>
            <button
              type="button"
              className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
              onClick={() => selectItem('home')}
            >
              Home
            </button>
          </li>
          <li className={`profile-menu${profileOpen ? ' is-open' : ''}${profileIsActive ? ' is-active' : ''}`}>
            <div className="profile-menu-trigger">
              <button
                type="button"
                className={profileIsActive ? 'nav-link active' : 'nav-link'}
                onClick={() => selectItem('sejarah')}
              >
                Profil
              </button>
              <button
                type="button"
                className="dropdown-toggle"
                aria-label={profileOpen ? 'Tutup submenu Profil' : 'Buka submenu Profil'}
                aria-expanded={profileOpen}
                onClick={() => setProfileOpen((isOpen) => !isOpen)}
              >
                <span className="dropdown-chevron" aria-hidden="true" />
              </button>
            </div>
            <ul className="profile-dropdown">
              {profileItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={activeSection === item.id ? 'dropdown-link active' : 'dropdown-link'}
                    onClick={() => selectItem(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </li>
          {navItems.slice(1).map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
                onClick={() => selectItem(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
