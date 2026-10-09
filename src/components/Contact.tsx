import { personal } from '../data';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    id: 'contact-email-link',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'backia-lakshmi-b',
    href: personal.linkedin,
    id: 'contact-linkedin-link',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'backia05',
    href: personal.github,
    id: 'contact-github-link',
  },
  {
    icon: ExternalLink,
    label: 'Skill Rack',
    value: 'Profile #440730',
    href: personal.skillrack,
    id: 'contact-skillrack-link',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          {/* Section label */}
          <p className="section-label" style={{ textAlign: 'center' }}>Get in Touch</p>

          {/* Headline */}
          <h2 className="contact-headline" id="contact-heading" style={{ marginBottom: '1.25rem' }}>
            Have an AI idea<br />worth exploring?
          </h2>

          {/* Supporting text */}
          <p style={{
            fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75,
            marginBottom: '3rem', maxWidth: '520px', margin: '0 auto 3rem',
          }}>
            I'm interested in AI, Generative AI, machine learning, and building practical intelligent
            applications. Connect with me to discuss technology, research, and opportunities to collaborate.
          </p>

          {/* Contact cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}>
            {contactLinks.map(({ icon: Icon, label, value, href, id }) => (
              <a
                key={id}
                id={id}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
                  padding: '1.5rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  transition: 'all 0.25s ease',
                  boxShadow: 'var(--shadow-sm)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent-light)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-subtle)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--shadow-sm)';
                }}
                aria-label={`${label}: ${value}`}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(30,58,95,0.06)',
                  border: '1px solid rgba(30,58,95,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} color="var(--accent)" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)', wordBreak: 'break-all' }}>
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Direct email CTA */}
          <a
            href={`mailto:${personal.email}`}
            className="btn-primary"
            id="contact-direct-email"
            style={{ fontSize: '1rem', padding: '0.9rem 2.25rem' }}
          >
            Send me an Email
            <Mail size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
