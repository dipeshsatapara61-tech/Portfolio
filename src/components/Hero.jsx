import React from 'react';
import {
  Download,
  ArrowRight,
  TrendingUp,
  Database,
  BarChart2,
  CheckCircle2,
  Layers,
  Sparkles,
  Linkedin,
  Github
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--header-height) + 40px)',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="hero-container"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* LEFT COLUMN: Narrative & Call to Actions */}
          <div
            className="hero-left"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            {/* Small introduction tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                marginBottom: '20px',
              }}
            >
              <Sparkles size={14} color="#38BDF8" />
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: 'var(--primary-accent)',
                  letterSpacing: '0.12em',
                }}
              >
                {personalInfo.shortIntro}
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="hero-heading"
              style={{
                fontSize: 'clamp(2.5rem, 4.2vw, 3.8rem)',
                fontWeight: '800',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '16px',
                color: 'var(--text-main)',
              }}
            >
              Turning Data Into Meaningful{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Business Insights.
              </span>
            </h1>

            {/* Professional Title */}
            <div
              style={{
                display: 'inline-block',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontWeight: '600',
                color: 'var(--primary-accent)',
                marginBottom: '20px',
                letterSpacing: '-0.01em',
              }}
            >
              {personalInfo.role}
            </div>

            {/* Short Description */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                maxWidth: '540px',
                marginBottom: '32px',
              }}
            >
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div
              className="hero-buttons"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '36px',
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={17} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Dipesh_Satapara_Resume.pdf"
                className="btn btn-secondary"
              >
                <Download size={17} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons for LinkedIn and GitHub */}
            <div
              className="hero-socials"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginRight: '6px',
                }}
              >
                Connect:
              </span>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dipesh Satapara on LinkedIn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#38BDF8';
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Linkedin size={16} color="#38BDF8" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dipesh Satapara on GitHub"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#38BDF8';
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Github size={16} color="#818CF8" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Premium Visual Composition */}
          <div
            className="hero-visual-wrapper"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px 0',
            }}
          >
            {/* Centerpiece: Professional Monogram & Analytics Core Card */}
            <div
              className="hero-visual-card"
              style={{
                width: '100%',
                maxWidth: '380px',
                background: 'linear-gradient(160deg, #162238 0%, #10192A 100%)',
                border: '1.5px solid rgba(56, 189, 248, 0.3)',
                borderRadius: 'var(--radius-xl)',
                padding: '36px 28px',
                boxShadow: 'var(--shadow-lg), 0 0 35px rgba(56, 189, 248, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Concentric Aura & Monogram Profile Avatar Placeholder */}
              <div
                style={{
                  position: 'relative',
                  width: '128px',
                  height: '128px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Outer pulsing ring */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-8px',
                    borderRadius: '50%',
                    border: '1px dashed rgba(56, 189, 248, 0.35)',
                    animation: 'floatSlow 10s linear infinite',
                  }}
                />
                
                {/* Inner glowing circle */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 35%, #1E2E4A 0%, #0B1120 100%)',
                    border: '2px solid rgba(56, 189, 248, 0.6)',
                    boxShadow: '0 0 25px rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                  }}
                >
                  <BarChart2 size={34} color="#38BDF8" />
                  <span
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: '800',
                      letterSpacing: '-0.02em',
                      color: 'var(--text-main)',
                    }}
                  >
                    DS
                  </span>
                </div>

                {/* Status Dot: Active / Ready to Analyze */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '4px',
                    right: '6px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#0B1120',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #10B981',
                  }}
                  title="Open to Analytics Roles"
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#10B981',
                      boxShadow: '0 0 8px #10B981',
                    }}
                  />
                </div>
              </div>

              {/* Identity text */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--text-main)',
                  marginBottom: '4px',
                }}
              >
                Dipesh Satapara
              </h3>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--primary-accent)',
                  fontWeight: '600',
                  marginBottom: '18px',
                }}
              >
                Business Intelligence & Data Analytics
              </p>

              {/* Core Skill Indicator Badges */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}
              >
                <span className="badge-pill">SQL</span>
                <span className="badge-pill">Power BI</span>
                <span className="badge-pill">Excel</span>
                <span className="badge-pill">Python</span>
              </div>
            </div>

            {/* FLOATING MINI DASHBOARD CARD 1: Growth Metric (Top Right) */}
            <div
              className="floating-card-1 animate-float-slow"
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-25px',
                zIndex: 3,
                background: 'rgba(21, 31, 50, 0.92)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 18px',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                minWidth: '190px',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TrendingUp size={20} color="#38BDF8" />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '600' }}>
                  Sales Velocity
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)' }}>
                    +28.4%
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#10B981', fontWeight: '600' }}>
                    QoQ
                  </span>
                </div>
              </div>
            </div>

            {/* FLOATING MINI DASHBOARD CARD 2: Query Latency / Pipeline (Bottom Left) */}
            <div
              className="floating-card-2 animate-float-reverse"
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-30px',
                zIndex: 3,
                background: 'rgba(21, 31, 50, 0.92)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(129, 140, 248, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 18px',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                minWidth: '200px',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(129, 140, 248, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Database size={20} color="#818CF8" />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '600' }}>
                  SQL Pipeline
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-main)' }}>
                    1.2M+
                  </span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--primary-accent)', fontWeight: '600' }}>
                    Rows Aggregated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
