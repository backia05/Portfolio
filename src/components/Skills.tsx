import { skills } from '../data';

const tagColors: Record<string, string> = {
  accent: 'tag-accent',
  teal: 'tag-teal',
  neutral: '',
};

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <div style={{ marginBottom: '3.5rem', maxWidth: '560px' }}>
          <p className="section-label">Technical Skills</p>
          <h2 className="section-heading" id="skills-heading">
            Tools and techniques<br />in my engineering toolkit.
          </h2>
          <div className="divider" />
          <p className="section-subheading">
            Skills are drawn directly from project work, internship experience, and academic study.
            No proficiency bars — just what I actually use.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {skills.map((group) => (
            <div
              key={group.category}
              className="card"
              style={{ padding: '1.5rem' }}
            >
              {/* Category icon row */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                marginBottom: '1.25rem',
              }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: group.color === 'teal' ? 'var(--accent-teal)' : group.color === 'accent' ? 'var(--accent)' : 'var(--text-muted)',
                }} />
                <h3 className="skill-category-title" style={{ marginBottom: 0 }}>
                  {group.category}
                </h3>
              </div>

              {/* Skill tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.items.map((skill) => (
                  <span key={skill} className={`tag ${tagColors[group.color] ?? ''}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p style={{
          marginTop: '2rem', fontSize: '0.78rem', color: 'var(--text-placeholder)',
          textAlign: 'center', fontStyle: 'italic',
        }}>
          All listed skills are grounded in project descriptions, internship work, and academic coursework.
        </p>
      </div>
    </section>
  );
}
