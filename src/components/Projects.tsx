import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../data';

/* ---- Workflow diagram component ---- */
function WorkflowDiagram({ steps, color }: { steps: { step: string; detail: string }[]; color: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {steps.map((s, i) => (
        <div key={s.step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          {/* Connector */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '50%',
              background: i === 0 ? color : 'var(--bg-secondary)',
              border: `2px solid ${color}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.65rem', fontWeight: 700, fontFamily: 'var(--font-mono)',
              color: i === 0 ? 'white' : color,
            }}>
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div style={{ width: '2px', height: '32px', background: `${color}30`, margin: '2px 0' }} />
            )}
          </div>
          {/* Content */}
          <div style={{ paddingBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{s.step}</div>
            <div style={{ fontSize: '0.77rem', color: 'var(--text-muted)', marginTop: '0.2rem', lineHeight: 1.5 }}>{s.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---- Agriculture SVG visual ---- */
function AgriVisual() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      {/* Ground */}
      <rect x="0" y="140" width="320" height="60" fill="rgba(13,115,119,0.06)" rx="0" />
      {/* Soil layers */}
      <rect x="40" y="148" width="240" height="10" rx="4" fill="rgba(13,115,119,0.12)" />
      <rect x="60" y="162" width="200" height="8" rx="4" fill="rgba(13,115,119,0.08)" />

      {/* Plant stem */}
      <line x1="160" y1="140" x2="160" y2="80" stroke="rgba(13,115,119,0.5)" strokeWidth="3" strokeLinecap="round" />
      {/* Leaves */}
      <ellipse cx="135" cy="105" rx="22" ry="10" fill="rgba(13,115,119,0.25)" transform="rotate(-30 135 105)" />
      <ellipse cx="185" cy="95" rx="22" ry="10" fill="rgba(13,115,119,0.25)" transform="rotate(30 185 95)" />
      {/* Top leaf */}
      <ellipse cx="160" cy="72" rx="16" ry="8" fill="rgba(13,115,119,0.4)" />

      {/* Data node icons */}
      {/* OCR document */}
      <rect x="24" y="42" width="50" height="62" rx="5" fill="var(--bg-card)" stroke="rgba(13,115,119,0.4)" strokeWidth="1.5" />
      <line x1="33" y1="58" x2="65" y2="58" stroke="rgba(13,115,119,0.3)" strokeWidth="1" />
      <line x1="33" y1="66" x2="65" y2="66" stroke="rgba(13,115,119,0.3)" strokeWidth="1" />
      <line x1="33" y1="74" x2="55" y2="74" stroke="rgba(13,115,119,0.3)" strokeWidth="1" />
      <text x="49" y="50" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(13,115,119,0.7)" fontFamily="JetBrains Mono">OCR</text>

      {/* GenAI node */}
      <circle cx="268" cy="73" r="28" fill="var(--bg-card)" stroke="rgba(74,144,217,0.4)" strokeWidth="1.5" />
      <text x="268" y="69" textAnchor="middle" fontSize="7" fontWeight="700" fill="rgba(74,144,217,0.8)" fontFamily="JetBrains Mono">Gen</text>
      <text x="268" y="80" textAnchor="middle" fontSize="7" fontWeight="700" fill="rgba(74,144,217,0.8)" fontFamily="JetBrains Mono">AI</text>

      {/* Connecting arrows */}
      <path d="M74 73 Q120 60 145 80" stroke="rgba(13,115,119,0.3)" strokeWidth="1.5" strokeDasharray="4 3" fill="none" markerEnd="url(#arrow)" />
      <path d="M175 80 Q210 60 242 73" stroke="rgba(74,144,217,0.3)" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />

      {/* Recommendation output */}
      <rect x="110" y="10" width="100" height="28" rx="8" fill="rgba(13,115,119,0.1)" stroke="rgba(13,115,119,0.3)" strokeWidth="1.5" />
      <text x="160" y="28" textAnchor="middle" fontSize="8" fontWeight="600" fill="rgba(13,115,119,0.8)" fontFamily="Inter">🌱 Crop Advice</text>
    </svg>
  );
}

/* ---- RAG Architecture SVG visual ---- */
function RAGVisual() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      {/* Voice mic */}
      <circle cx="50" cy="100" r="28" fill="var(--bg-secondary)" stroke="rgba(30,58,95,0.3)" strokeWidth="1.5" />
      <rect x="43" y="82" width="14" height="22" rx="7" fill="rgba(30,58,95,0.5)" />
      <path d="M37 104 Q37 118 50 118 Q63 118 63 104" stroke="rgba(30,58,95,0.5)" strokeWidth="2" fill="none" />
      <line x1="50" y1="118" x2="50" y2="126" stroke="rgba(30,58,95,0.4)" strokeWidth="2" />

      {/* Arrow: voice -> retrieval */}
      <path d="M78 100 H108" stroke="rgba(30,58,95,0.3)" strokeWidth="1.5" markerEnd="url(#arrowB)" />

      {/* Knowledge base box */}
      <rect x="110" y="72" width="100" height="56" rx="8" fill="var(--bg-card)" stroke="rgba(30,58,95,0.3)" strokeWidth="1.5" />
      <text x="160" y="92" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="rgba(30,58,95,0.8)" fontFamily="JetBrains Mono">KNOWLEDGE</text>
      <line x1="120" y1="98" x2="200" y2="98" stroke="rgba(30,58,95,0.15)" strokeWidth="1" />
      <text x="160" y="110" textAnchor="middle" fontSize="7" fill="rgba(30,58,95,0.6)" fontFamily="Inter">PDF + JSON</text>
      <text x="160" y="120" textAnchor="middle" fontSize="7" fill="rgba(30,58,95,0.6)" fontFamily="Inter">Semantic Search</text>

      {/* Arrow: knowledge -> LLM */}
      <path d="M210 100 H240" stroke="rgba(30,58,95,0.3)" strokeWidth="1.5" />

      {/* LLM circle */}
      <circle cx="268" cy="100" r="28" fill="var(--bg-secondary)" stroke="rgba(74,144,217,0.4)" strokeWidth="1.5" />
      <text x="268" y="96" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(74,144,217,0.8)" fontFamily="JetBrains Mono">LLM</text>
      <text x="268" y="107" textAnchor="middle" fontSize="7" fill="rgba(74,144,217,0.6)" fontFamily="Inter">RAG</text>

      {/* Response wave */}
      <path d="M50 152 Q80 140 110 152 Q140 164 170 152 Q200 140 230 152 Q260 164 280 155"
        stroke="rgba(74,144,217,0.35)" strokeWidth="2" fill="none" />

      {/* Labels */}
      <text x="50" y="175" textAnchor="middle" fontSize="7" fill="var(--text-muted)" fontFamily="Inter">Voice In</text>
      <text x="160" y="175" textAnchor="middle" fontSize="7" fill="var(--text-muted)" fontFamily="Inter">Retrieval</text>
      <text x="268" y="175" textAnchor="middle" fontSize="7" fill="var(--text-muted)" fontFamily="Inter">Response</text>

      <defs>
        <marker id="arrowB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="rgba(30,58,95,0.4)" />
        </marker>
      </defs>
    </svg>
  );
}

const visuals = [AgriVisual, RAGVisual];

/* ---- Case study modal / expanded view ---- */
function CaseStudy({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`case-study-${project.id}-title`}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--bg-card)',
          borderRadius: '20px',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          maxWidth: '760px',
          width: '100%',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close case study"
          style={{
            position: 'sticky', top: 0, float: 'right',
            background: 'var(--bg-secondary)', border: '1px solid var(--border)',
            borderRadius: '8px', width: '2rem', height: '2rem',
            cursor: 'pointer', fontSize: '1.1rem', lineHeight: 1,
            color: 'var(--text-secondary)',
          }}
        >
          ×
        </button>

        {/* Header */}
        <p style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          PROJECT {project.number}
        </p>
        <h2 id={`case-study-${project.id}-title`} style={{
          fontSize: 'clamp(1.4rem, 4vw, 1.9rem)', fontWeight: 800,
          color: 'var(--text-primary)', marginBottom: '0.35rem',
        }}>
          {project.title}
        </h2>
        <span className="tag-teal tag" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
          {project.category}
        </span>

        {/* Problem */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>
            The Problem
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.95rem' }}>{project.problem}</p>
        </div>

        {/* Approach */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>
            Approach
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.95rem' }}>{project.approach}</p>
        </div>

        {/* Architecture diagram label */}
        <div style={{
          background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)',
          borderRadius: '14px', padding: '1.5rem',
          marginBottom: '2rem',
        }}>
          <p style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', letterSpacing: '0.08em' }}>
            CONCEPTUAL WORKFLOW
          </p>
          <WorkflowDiagram steps={project.workflow} color={project.color} />
        </div>

        {/* Concepts */}
        <div>
          <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
            Technical Concepts
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.concepts.map((c) => (
              <span key={c} className="tag tag-accent">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Main Projects section ---- */
export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [caseStudy, setCaseStudy] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ marginBottom: '3.5rem', maxWidth: '560px' }}>
          <p className="section-label">Featured Projects</p>
          <h2 className="section-heading" id="projects-heading">
            Where ideas become<br />intelligent systems.
          </h2>
          <div className="divider" />
          <p className="section-subheading">
            Each project is grounded in real engineering challenges — applying AI techniques to
            practical, meaningful problems.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((project, idx) => {
            const Visual = visuals[idx];
            const isExpanded = expanded === project.id;

            return (
              <article
                key={project.id}
                className="card"
                style={{ padding: 0, overflow: 'hidden', borderRadius: '20px' }}
              >
                {/* Card header */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 300px',
                  gap: 0,
                  minHeight: '260px',
                }} className="project-card-inner">
                  {/* Left: info */}
                  <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <span className="project-number">PROJECT {project.number}</span>
                      <span className="tag tag-teal">{project.category}</span>
                    </div>
                    <h3 style={{
                      fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800,
                      color: 'var(--text-primary)', marginBottom: '0.5rem',
                    }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.65 }}>
                      {project.description}
                    </p>
                    {/* Concepts */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
                      {project.concepts.slice(0, 4).map((c) => (
                        <span key={c} className="tag">{c}</span>
                      ))}
                    </div>
                    {/* Actions */}
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <button
                        className="btn-primary"
                        style={{ fontSize: '0.82rem', padding: '0.6rem 1.25rem' }}
                        onClick={() => setCaseStudy(project)}
                        aria-label={`View case study for ${project.title}`}
                        id={`case-study-btn-${project.id}`}
                      >
                        View Case Study
                        <ExternalLink size={13} />
                      </button>
                      <button
                        className="btn-ghost"
                        onClick={() => setExpanded(isExpanded ? null : project.id)}
                        aria-expanded={isExpanded}
                        aria-controls={`workflow-${project.id}`}
                        id={`workflow-btn-${project.id}`}
                      >
                        {isExpanded ? 'Hide Workflow' : 'See Workflow'}
                        {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                      </button>
                    </div>
                  </div>

                  {/* Right: visual */}
                  <div className="project-visual-panel" style={{
                    background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
                    borderLeft: '1px solid var(--border-subtle)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '1.5rem',
                    minHeight: '220px',
                  }}>
                    <Visual />
                  </div>
                </div>

                {/* Expandable workflow */}
                {isExpanded && (
                  <div
                    id={`workflow-${project.id}`}
                    style={{
                      borderTop: '1px solid var(--border-subtle)',
                      padding: 'clamp(1.25rem, 3vw, 2rem)',
                      background: 'var(--bg-primary)',
                    }}
                  >
                    <p style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '1.25rem', letterSpacing: '0.1em' }}>
                      CONCEPTUAL WORKFLOW — NOT A VERIFIED IMPLEMENTATION DIAGRAM
                    </p>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                      gap: '0.5rem',
                    }}>
                      {project.workflow.map((step, i) => (
                        <div key={step.step} style={{
                          display: 'flex', flexDirection: 'column', gap: '0.35rem',
                          padding: '1rem',
                          background: 'var(--bg-card)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '12px',
                          position: 'relative',
                        }}>
                          <div style={{
                            width: '22px', height: '22px', borderRadius: '50%',
                            background: project.color, color: 'white',
                            fontSize: '0.65rem', fontWeight: 700, fontFamily: 'var(--font-mono)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0,
                          }}>
                            {i + 1}
                          </div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>{step.step}</div>
                          <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{step.detail}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* Case study modal */}
      {caseStudy && <CaseStudy project={caseStudy} onClose={() => setCaseStudy(null)} />}

      <style>{`
        @media (max-width: 768px) {
          .project-card-inner { grid-template-columns: 1fr !important; }
          .project-visual-panel { border-left: none !important; border-top: 1px solid var(--border-subtle); min-height: 180px !important; }
        }
      `}</style>
    </section>
  );
}
