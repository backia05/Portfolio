const interests = [
  'Generative AI',
  'Retrieval-Augmented Generation',
  'Machine Learning',
  'Data Analytics',
  'AI Research',
];

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '560px' }}>
          <p className="section-label">About</p>
          <h2 className="section-heading" id="about-heading">
            Engineering intelligence,<br />one system at a time.
          </h2>
          <div className="divider" />
        </div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
          gap: '4rem',
          alignItems: 'start',
        }} className="about-grid">
          {/* Left: intro */}
          <div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              I'm an Artificial Intelligence and Data Science undergraduate at{' '}
              <strong style={{ color: 'var(--text-primary)' }}>National Engineering College</strong>,
              interested in developing intelligent applications that connect data, language models,
              and real-world problems.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              My experience includes building{' '}
              <strong style={{ color: 'var(--text-primary)' }}>RAG-based conversational systems</strong>,
              developing an{' '}
              <strong style={{ color: 'var(--text-primary)' }}>AI-powered smart farming assistant</strong>,
              and exploring research on{' '}
              <strong style={{ color: 'var(--text-primary)' }}>self-adaptive digital twins</strong> for
              patient health dynamics.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              I value continuous learning, technical experimentation, and translating ideas into practical
              engineering solutions that have real utility.
            </p>

            {/* Quote / highlight */}
            <div style={{
              marginTop: '2rem',
              borderLeft: '3px solid var(--accent-teal)',
              paddingLeft: '1.25rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              fontSize: '0.95rem',
              lineHeight: 1.7,
            }}>
              "I believe the most interesting engineering work happens at the intersection of language,
              data, and human intent — and that's exactly where I want to build."
            </div>
          </div>

          {/* Right: interests + quick facts */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem',
              }}>
                Core Interests
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {interests.map((interest) => (
                  <div key={interest} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.6rem 1rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500,
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent-teal)';
                      (e.currentTarget as HTMLDivElement).style.color = 'var(--accent-teal)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-subtle)';
                      (e.currentTarget as HTMLDivElement).style.color = 'var(--text-secondary)';
                    }}
                  >
                    <span style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: 'var(--accent-teal)', flexShrink: 0,
                    }} />
                    {interest}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div style={{
              padding: '1.25rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
            }}>
              <h3 style={{
                fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem',
              }}>
                Quick Facts
              </h3>
              {[
                ['🎓', '2023 – 2027 Batch', 'NEC, Kovilpatti'],
                ['📍', 'Thoothukudi', 'Tamil Nadu, India'],
                ['📄', 'IEEE Published', 'ICESC 2025'],
                ['💻', 'AI Developer Intern', '2026'],
              ].map(([icon, title, sub]) => (
                <div key={title} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '0.1rem' }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
