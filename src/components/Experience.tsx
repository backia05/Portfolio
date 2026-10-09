import { experience } from '../data';
import { Building2, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <div style={{ marginBottom: '3.5rem', maxWidth: '560px' }}>
          <p className="section-label">Professional Experience</p>
          <h2 className="section-heading" id="experience-heading">
            Building real systems<br />in production environments.
          </h2>
          <div className="divider" />
        </div>

        {/* Experience card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 3fr',
          gap: '3rem',
          alignItems: 'start',
        }} className="experience-grid">
          {/* Left: company info */}
          <div>
            <div style={{
              width: '56px', height: '56px', borderRadius: '14px',
              background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1rem',
            }}>
              <Building2 size={24} color="white" />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              {experience.company}
            </h3>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
              <MapPin size={12} />
              {experience.location}
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              <Calendar size={12} />
              {experience.year}
            </p>
            <span className="tag tag-accent">{experience.role}</span>
          </div>

          {/* Right: responsibilities */}
          <div>
            {/* Role title */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem',
              paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)',
            }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {experience.role}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Focused on RAG systems, NLP pipelines, and conversational AI
                </p>
              </div>
            </div>

            {/* Responsibilities list */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {experience.responsibilities.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '24px', height: '24px', borderRadius: '50%',
                    background: 'rgba(13,115,119,0.1)',
                    border: '1.5px solid var(--accent-teal)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '0.1rem',
                  }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-teal)' }} />
                  </div>
                  <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item}</p>
                </li>
              ))}
            </ul>

            {/* Callout linking to voice assistant project */}
            <div style={{
              marginTop: '2rem',
              padding: '1rem 1.25rem',
              background: 'rgba(30,58,95,0.05)',
              border: '1px solid rgba(30,58,95,0.12)',
              borderRadius: '10px',
              borderLeft: '3px solid var(--accent)',
            }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--accent)' }}>Project connection:</strong>{' '}
                The RAG-based voice assistant developed during this internship is also featured in
                the Projects section above — see the{' '}
                <a href="#projects" style={{ color: 'var(--accent-light)', textDecoration: 'underline' }}>
                  Intelligent AI Voice Assistant
                </a>{' '}
                for architectural details.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .experience-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
