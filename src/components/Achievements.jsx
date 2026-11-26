import React from 'react';
import { Trophy, Award, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/achievements';

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={13} />
            <span>Honors &amp; Awards</span>
          </div>
          <h2 className="section-title">Achievements &amp; Recognition</h2>
          <p className="section-subtitle">
            Notable distinctions and hackathon milestones validating analytical rigor and teamwork.
          </p>
        </div>

        {/* Two prominent achievement cards */}
        <div
          className="achievements-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
            maxWidth: '860px',
            margin: '0 auto',
          }}
        >
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="premium-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                border: '1px solid var(--border-color)',
                background: 'linear-gradient(145deg, #151F32 0%, #101828 100%)',
              }}
            >
              {/* Subtle Trophy / Award Icon */}
              <div
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '16px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 0 15px rgba(56, 189, 248, 0.15)',
                }}
              >
                {item.id === 'sih-2025' ? (
                  <Trophy size={28} color="#38BDF8" />
                ) : (
                  <Award size={28} color="#818CF8" />
                )}
              </div>

              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: '700',
                    color: item.id === 'sih-2025' ? 'var(--primary-accent)' : 'var(--secondary-accent)',
                  }}
                >
                  {item.badge}
                </span>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: '800',
                    color: 'var(--text-main)',
                    marginTop: '2px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    marginTop: '4px',
                  }}
                >
                  {item.organization}
                </p>

                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    marginTop: '2px',
                  }}
                >
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
