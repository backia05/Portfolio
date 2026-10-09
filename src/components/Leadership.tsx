import { leadership } from '../data';

export default function Leadership() {
  return (
    <section id="leadership" className="section" aria-labelledby="leadership-heading">
      <div className="container">
        <div style={{ marginBottom: '3.5rem', maxWidth: '560px' }}>
          <p className="section-label">Leadership & Achievements</p>
          <h2 className="section-heading" id="leadership-heading">
            Recognised beyond<br />the classroom.
          </h2>
          <div className="divider" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
        }}>
          {leadership.map((item) => (
            <div
              key={item.title}
              className="card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <div style={{ fontSize: '2rem', lineHeight: 1 }} aria-hidden="true">{item.icon}</div>
              <h3 style={{
                fontSize: '0.95rem', fontWeight: 700,
                color: 'var(--text-primary)', lineHeight: 1.3,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '0.85rem', color: 'var(--text-secondary)',
                lineHeight: 1.65,
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
