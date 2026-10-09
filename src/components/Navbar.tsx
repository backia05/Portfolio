import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme, useActiveSection } from '../hooks';
import { personal } from '../data';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const NAV_IDS = NAV_ITEMS.map((n) => n.href.slice(1));

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const active = useActiveSection(NAV_IDS);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'var(--nav-bg, rgba(250,249,247,0.92))' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1.5rem', height: '4rem' }}>
        {/* Desktop Nav */}
        <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          className="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link${active === item.href.slice(1) ? ' active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              width: '2.25rem', height: '2.25rem', borderRadius: '8px',
              border: '1.5px solid var(--border)', background: 'transparent',
              cursor: 'pointer', color: 'var(--text-muted)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent-light)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)';
            }}
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="mobile-menu-btn"
            style={{
              width: '2.25rem', height: '2.25rem', borderRadius: '8px',
              border: '1.5px solid var(--border)', background: 'transparent',
              cursor: 'pointer', color: 'var(--text-secondary)',
              display: 'none', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--bg-card)',
          borderBottom: '1px solid var(--border)',
          padding: '1rem',
          display: 'flex', flexDirection: 'column', gap: '0.25rem',
          boxShadow: 'var(--shadow-md)',
        }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ padding: '0.6rem 0.75rem', display: 'block' }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ borderTop: '1px solid var(--border-subtle)', marginTop: '0.5rem', paddingTop: '0.75rem' }}>
            <a href={`mailto:${personal.email}`} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
              Get in Touch
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
