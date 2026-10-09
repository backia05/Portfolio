import { achievements } from '../data';

const icons = ['📊', '🏅', '📄', '💼'];

export default function Achievements() {
  return (
    <section aria-label="Key achievements" className="achievement-strip" id="achievements">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
        }} className="achievement-grid">
          {achievements.map((item, i) => (
            <div key={item.label} className="achievement-item">
              <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }} aria-hidden="true">
                {icons[i]}
              </div>
              <div className="achievement-number">
                {item.value}
                <span style={{ fontSize: '60%', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{item.unit}</span>
              </div>
              <div className="achievement-label">
                <strong style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.85rem', fontWeight: 600 }}>
                  {item.label}
                </strong>
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .achievement-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
