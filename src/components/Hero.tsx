import { Github, Linkedin, Mail, ExternalLink, ArrowDown, BookOpen } from 'lucide-react';
import { personal, publication } from '../data';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'calc(4rem + 64px) 0 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background texture */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(74,144,217,0.04) 0%, transparent 70%)',
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '4rem',
          alignItems: 'center',
        }} className="hero-grid">
          
          {/* Left: text */}
          <div style={{ maxWidth: '640px' }}>

          {/* Eyebrow */}
          <p className="hero-eyebrow" style={{ marginBottom: '1.25rem' }}>
            AI Engineering · Generative AI · Research
          </p>

          {/* Name — prominently sized */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
            fontWeight: 600,
            color: 'var(--text-muted)',
            letterSpacing: '0.01em',
            marginBottom: '0.6rem',
          }}>
            Backia Lakshmi B
          </p>

          {/* Headline */}
          <h1 className="hero-headline" style={{ marginBottom: '1.5rem' }}>
            Building AI that turns<br />
            <em>knowledge into action.</em>
          </h1>

          {/* Supporting paragraph */}
          <p className="hero-sub" style={{ marginBottom: '2rem' }}>
            I'm Backia Lakshmi, an Artificial Intelligence and Data Science student
            exploring Generative AI, retrieval-augmented systems, and intelligent applications.
            I enjoy translating technical ideas into practical solutions through engineering,
            experimentation, and research.
          </p>

          {/* Identity pill */}
          <div style={{
            display: 'inline-flex', flexWrap: 'wrap', gap: '0.5rem',
            padding: '0.6rem 1rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '100px',
            marginBottom: '2.5rem',
            boxShadow: 'var(--shadow-sm)',
          }}>
            {['AI Developer Intern', 'AI & Data Science Undergraduate', 'IEEE Publication Author'].map((label, i) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {i > 0 && <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--border)', display: 'inline-block' }} />}
                <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{label}</span>
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <a href="#projects" className="btn-primary" id="cta-explore-work">
              Explore My Work
              <ArrowDown size={15} />
            </a>
            <a href="#research" className="btn-secondary" id="cta-view-research">
              View Research
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub profile">
              <Github size={16} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn profile">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${personal.email}`} className="icon-link" aria-label="Send email">
              <Mail size={16} />
            </a>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-placeholder)', marginLeft: '0.25rem' }}>
              {personal.location}
            </span>
          </div>
        </div>

        {/* Right: Featured Research */}
        <div className="hero-visual" style={{
          background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
              background: 'linear-gradient(to right, var(--accent), var(--accent-teal))',
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <BookOpen size={16} color="var(--accent)" />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em' }}>FEATURED RESEARCH</span>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.4, fontFamily: 'var(--font-display)' }}>
              {publication.title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {publication.conference}
            </p>
            <a href="#research" className="btn-ghost" style={{ display: 'inline-flex', padding: '0.6rem 1rem', fontSize: '0.82rem', alignSelf: 'flex-start' }}>
              View Details
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        color: 'var(--text-placeholder)', fontSize: '0.7rem', letterSpacing: '0.1em',
        textTransform: 'uppercase', fontFamily: 'var(--font-mono)',
      }} className="scroll-indicator">
        <span>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--border), transparent)',
          animation: 'fadeInUp 1s ease infinite alternate',
        }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .hero-visual { width: 100% !important; max-width: 640px !important; }
        }
        @media (max-height: 800px) {
          .scroll-indicator { display: none !important; }
        }
      `}</style>
    </section>
  );
}
