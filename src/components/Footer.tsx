import { personal } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo">
      <div className="container" style={{ padding: '3rem clamp(1.25rem, 4vw, 2.5rem)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '2rem',
          alignItems: 'start',
          marginBottom: '2.5rem',
        }} className="footer-grid">
          {/* Left: brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '2rem', height: '2rem', borderRadius: '8px',
                background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ color: 'white', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>BL</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Backia Lakshmi B</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '280px' }}>
              AI & Machine Learning Enthusiast. Building intelligent systems through research and engineering.
            </p>
          </div>

          {/* Right: nav */}
          <nav aria-label="Footer navigation">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.4rem 2rem',
            }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: '0.83rem', color: 'var(--text-muted)',
                    textDecoration: 'none', transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border-subtle)',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-placeholder)' }}>
            © {year} Backia Lakshmi B · Designed & built with care.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub" style={{ width: '2rem', height: '2rem' }}>
              <Github size={14} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn" style={{ width: '2rem', height: '2rem' }}>
              <Linkedin size={14} />
            </a>
            <a href={`mailto:${personal.email}`} className="icon-link" aria-label="Email" style={{ width: '2rem', height: '2rem' }}>
              <Mail size={14} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
