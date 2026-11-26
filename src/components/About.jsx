import React from 'react';
import { GraduationCap, School, Award, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  const cards = [
    {
      icon: <GraduationCap size={24} color="#38BDF8" />,
      label: 'Education',
      value: 'B.E. Information Technology',
      detail: 'Core Analytics & Systems',
    },
    {
      icon: <School size={24} color="#818CF8" />,
      label: 'College',
      value: 'V.V.P. Engineering College',
      detail: 'Rajkot, Gujarat',
    },
    {
      icon: <Award size={24} color="#38BDF8" />,
      label: 'CGPA',
      value: '8.33',
      detail: 'Academic Excellence',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={13} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">About Me</h2>
          
          {/* Strict word count constrained description (41 words) */}
          <p
            className="section-subtitle"
            style={{
              fontSize: '1.08rem',
              lineHeight: 1.7,
              color: 'var(--text-main)',
              marginTop: '18px',
              maxWidth: '680px',
            }}
          >
            {personalInfo.aboutDescription}
          </p>
        </div>

        {/* 3 Compact Information Cards */}
        <div
          className="about-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginTop: '20px',
            maxWidth: '960px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {cards.map((item, index) => (
            <div
              key={index}
              className="premium-card"
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '14px',
                border: '1px solid var(--border-color)',
                background: 'linear-gradient(180deg, #162238 0%, #121A2B 100%)',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(56, 189, 248, 0.08)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </div>

              <div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: '600',
                    color: 'var(--text-muted)',
                  }}
                >
                  {item.label}
                </span>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: 'var(--text-main)',
                    marginTop: '4px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.value}
                </h3>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    marginTop: '4px',
                  }}
                >
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
