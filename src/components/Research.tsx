import { publication } from '../data';
import { ExternalLink, BookOpen, MapPin } from 'lucide-react';

/* Abstract digital-twin inspired SVG */
function ResearchVisual() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '100%', maxWidth: '280px' }}>
      {/* Real patient timeline */}
      <line x1="20" y1="100" x2="260" y2="100" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
      {/* Health data wave (real) */}
      <path d="M20 100 Q40 80 60 100 Q80 120 100 90 Q120 60 140 100 Q160 140 180 90 Q200 60 220 100 Q240 130 260 100"
        stroke="var(--accent-light)" strokeWidth="2" fill="none" />
      {/* Digital twin wave (adaptive) */}
      <path d="M20 100 Q42 82 62 100 Q84 118 102 92 Q124 64 142 102 Q162 138 182 92 Q202 63 222 100 Q244 128 262 101"
        stroke="var(--accent-teal)" strokeWidth="2" fill="none" strokeDasharray="6 3" opacity="0.7" />

      {/* Twin sync arrows */}
      <path d="M140 72 L140 58" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#upArrow)" />
      <path d="M140 128 L140 142" stroke="var(--accent-teal)" strokeWidth="1.5" markerEnd="url(#downArrow)" />

      {/* Patient box */}
      <rect x="100" y="36" width="80" height="22" rx="5" fill="rgba(30,58,95,0.08)" stroke="rgba(30,58,95,0.25)" strokeWidth="1" />
      <text x="140" y="51" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="rgba(30,58,95,0.7)" fontFamily="JetBrains Mono">REAL PATIENT</text>

      {/* Digital twin box */}
      <rect x="100" y="142" width="80" height="22" rx="5" fill="rgba(13,115,119,0.08)" stroke="rgba(13,115,119,0.25)" strokeWidth="1" />
      <text x="140" y="157" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="rgba(13,115,119,0.7)" fontFamily="JetBrains Mono">DIGITAL TWIN</text>

      {/* Data node indicators */}
      {[60, 100, 140, 180, 220].map((x, i) => (
        <circle key={x} cx={x} cy={100 + (i % 2 === 0 ? -18 : 15)} r="4"
          fill={i % 2 === 0 ? 'rgba(74,144,217,0.5)' : 'rgba(13,115,119,0.5)'}
          stroke="var(--bg-card)" strokeWidth="1.5" />
      ))}

      {/* Learning indicator */}
      <text x="20" y="190" fontSize="7" fill="var(--text-muted)" fontFamily="Inter">Learning-Driven Simulation</text>

      <defs>
        <marker id="upArrow" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto">
          <path d="M0,6 L3,0 L6,6" fill="none" stroke="var(--accent)" strokeWidth="1" />
        </marker>
        <marker id="downArrow" markerWidth="6" markerHeight="6" refX="3" refY="0" orient="auto">
          <path d="M0,0 L3,6 L6,0" fill="none" stroke="var(--accent-teal)" strokeWidth="1" />
        </marker>
      </defs>
    </svg>
  );
}

export default function Research() {
  return (
    <section id="research" className="section" aria-labelledby="research-heading" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ marginBottom: '3.5rem', maxWidth: '560px' }}>
          <p className="section-label">Research & Publication</p>
          <h2 className="section-heading" id="research-heading">
            Peer-reviewed at an<br />international conference.
          </h2>
          <div className="divider" />
          <p className="section-subheading">
            This publication represents original research presented at a 6th consecutive IEEE ICESC,
            an established international venue for electronics and computing research.
          </p>
        </div>

        <div className="research-card">
          {/* IEEE badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.4rem 0.9rem',
              background: 'rgba(30,58,95,0.08)', border: '1px solid rgba(30,58,95,0.2)',
              borderRadius: '100px',
            }}>
              <BookOpen size={13} color="var(--accent)" />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.05em' }}>IEEE PUBLICATION</span>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{publication.year}</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr',
            gap: '3rem',
            alignItems: 'start',
          }} className="research-grid">
            {/* Left: details */}
            <div>
              <h3 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.3,
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-display)',
              }}>
                "{publication.title}"
              </h3>

              {/* Meta */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <MapPin size={13} color="var(--text-muted)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {publication.conference}
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {publication.location} · pp. {publication.pages}
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    DOI:
                  </span>
                  <a
                    href={publication.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.78rem', color: 'var(--accent-light)',
                      fontFamily: 'var(--font-mono)', textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  >
                    {publication.doi}
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div style={{
                padding: '1.25rem',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                marginBottom: '1.75rem',
              }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>
                  Research Summary
                </p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  {publication.summary}
                </p>
              </div>

              {/* CTA */}
              <a
                href={publication.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                id="view-publication-btn"
                style={{ width: 'fit-content' }}
              >
                View Publication
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Right: visual */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ResearchVisual />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .research-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
