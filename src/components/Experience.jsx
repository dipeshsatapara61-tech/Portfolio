import React from 'react';
import { Briefcase, Calendar, Building, Sparkles } from 'lucide-react';
import { experienceData } from '../data/achievements';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={13} />
            <span>Career Journey</span>
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Hands-on industry experience applying analytics, visualization, and machine learning techniques.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
          }}
        >
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="premium-card"
              style={{
                padding: '36px 32px',
                border: '1px solid var(--border-color)',
                background: 'linear-gradient(180deg, #162238 0%, #111B2C 100%)',
                position: 'relative',
              }}
            >
              {/* Top Accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #38BDF8 0%, #818CF8 100%)',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '14px',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      color: 'var(--text-main)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.role}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--primary-accent)',
                      fontSize: '1.02rem',
                      fontWeight: '600',
                      marginTop: '4px',
                    }}
                  >
                    <Building size={16} />
                    <span>{item.company}</span>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    color: 'var(--primary-accent)',
                  }}
                >
                  {item.type}
                </span>
              </div>

              {/* Short description */}
              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: '1.65',
                  color: 'var(--text-secondary)',
                  marginBottom: '22px',
                }}
              >
                {item.description}
              </p>

              {/* Compact Technology Tags */}
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: '600',
                    color: 'var(--text-muted)',
                    marginBottom: '10px',
                  }}
                >
                  Technologies &amp; Methodologies
                </span>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                >
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: '500',
                        padding: '5px 12px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(11, 17, 32, 0.6)',
                        border: '1px solid rgba(30, 41, 59, 0.8)',
                        color: 'var(--text-main)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
