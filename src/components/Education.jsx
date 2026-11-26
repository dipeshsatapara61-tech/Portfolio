import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, Building2 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Education = () => {
  const { degree, college, university, duration, cgpa } = personalInfo.educationDetails;

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={13} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal foundation in computer science and information technology engineering.
          </p>
        </div>

        {/* Clean Single Education Card */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
          }}
        >
          <div
            className="premium-card"
            style={{
              padding: '36px 32px',
              border: '1px solid var(--border-color)',
              background: 'linear-gradient(180deg, #162238 0%, #111B2C 100%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={26} color="#38BDF8" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: '800',
                      color: 'var(--text-main)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {degree}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--primary-accent)',
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginTop: '4px',
                    }}
                  >
                    <Building2 size={16} />
                    <span>{college}</span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)',
                      marginTop: '2px',
                    }}
                  >
                    {university}
                  </div>
                </div>
              </div>

              {/* CGPA Badge */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1.5px solid rgba(56, 189, 248, 0.4)',
                    boxShadow: '0 0 15px rgba(56, 189, 248, 0.15)',
                  }}
                >
                  <Award size={16} color="#38BDF8" />
                  <span
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: '800',
                      color: 'var(--text-main)',
                    }}
                  >
                    CGPA: {cgpa}
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    marginTop: '8px',
                  }}
                >
                  <Calendar size={14} />
                  <span>{duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
