import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/site.js';

// Top navigation. Transparent "cinema" mode on the dark home page (turns
// into dark glass once the user scrolls); light glass mode on other pages.
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const cinema = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${cinema ? ' cinema' : ''}${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link className="brand" to="/">
          <span className="logo">R</span>
          <span>ReminderDocs</span>
        </Link>
        <nav className={`navlinks${mobileOpen ? ' mobile' : ''}`}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.to} onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="actions">
          <Link className="btn btn-ghost" to="/login">Log in</Link>
          <Link className="btn btn-primary" to="/register">Get started</Link>
          <button
            className="menu-btn"
            aria-label="Menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
