import { education } from '../data';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-heading" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ marginBottom: '3.5rem', maxWidth: '560px' }}>
          <p className="section-label">Education</p>
          <h2 className="section-heading" id="education-heading">
            Academic foundation<br />in AI & Data Science.
          </h2>
          <div className="divider" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '760px' }}>
          {education.map((edu, i) => (
            <div key={edu.institution} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              {/* Timeline indicator */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.3rem' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: edu.highlight ? 'var(--accent)' : 'var(--bg-card)',
                  border: edu.highlight ? 'none' : '2px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <GraduationCap size={20} color={edu.highlight ? 'white' : 'var(--text-muted)'} />
                </div>
                {i < education.length - 1 && (
                  <div style={{ width: '1px', height: '3rem', background: 'var(--border)', marginTop: '0.5rem' }} />
                )}
              </div>

              {/* Content card */}
              <div
                className="card"
                style={{
                  flex: 1,
                  padding: '1.5rem',
                  borderColor: edu.highlight ? 'rgba(30,58,95,0.2)' : 'var(--border-subtle)',
                  borderWidth: edu.highlight ? '1.5px' : '1px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {edu.highlight && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                    background: 'linear-gradient(to right, var(--accent), var(--accent-teal))',
                  }} />
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      {edu.degree}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      {edu.institution}, {edu.location}
                    </p>
                  </div>

                  {/* Score badge */}
                  <div style={{
                    padding: '0.4rem 1rem',
                    background: edu.highlight ? 'rgba(30,58,95,0.06)' : 'var(--bg-secondary)',
                    border: `1px solid ${edu.highlight ? 'rgba(30,58,95,0.15)' : 'var(--border-subtle)'}`,
                    borderRadius: '100px',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontSize: '1rem', fontWeight: 800,
                      color: edu.highlight ? 'var(--accent)' : 'var(--text-primary)',
                      fontFamily: 'var(--font-display)',
                    }}>
                      {edu.score}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                      {edu.scoreNote}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.78rem', color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)', letterSpacing: '0.05em',
                  }}>
                    {edu.period}
                  </span>
                  {edu.highlight && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }} className="tag tag-accent">
                      <Award size={11} />
                      First Rank in Department
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
