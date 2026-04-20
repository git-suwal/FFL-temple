import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import DarshanModal from './DarshanModal'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darshanOpen, setDarshanOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <div className="header-left">
            <a
              href="https://wa.me/your-number00"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={16} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </a>

            <button
              className="darshan-button"
              onClick={() => setDarshanOpen(true)}
            >
              Darshan
            </button>
          </div>

          <div className="header-right">
            <button
              className="menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <>
          <div className="menu-backdrop" onClick={closeMenu}></div>

          <aside className="side-menu">
            <div className="side-menu-header">
              <p className="side-menu-title">Menu</p>

              <button
                className="menu-close-button"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="side-menu-links">
              <a href="#about" onClick={closeMenu}>
                About Us
              </a>
              <a href="#events" onClick={closeMenu}>
                Events
              </a>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </nav>
          </aside>
        </>
      )}

      <DarshanModal
        isOpen={darshanOpen}
        onClose={() => setDarshanOpen(false)}
      />
    </>
  )
}

export default Header