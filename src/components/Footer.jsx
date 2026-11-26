import React from 'react';
import { Linkedin, Github, Heart } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: '100px',
        borderTop: '1px solid #1E293B',
        background: 'rgba(11, 17, 32, 0.95)',
        padding: '50px 0 35px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '20px',
        }}
      >
        {/* Name and Professional Title */}
        <div>
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '800',
              color: 'var(--text-main)',
              letterSpacing: '-0.01em',
            }}
          >
            {personalInfo.name}
          </h3>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--primary-accent)',
              fontWeight: '500',
              marginTop: '4px',
            }}
          >
            {personalInfo.role}
          </p>
        </div>

        {/* Social Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <Linkedin size={17} />
            <span>LinkedIn</span>
          </a>

          <span style={{ color: '#1E293B' }}>•</span>

          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#818CF8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <Github size={17} />
            <span>GitHub</span>
          </a>
        </div>

        {/* Copyright */}
        <div
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            borderTop: '1px solid rgba(30, 41, 59, 0.6)',
            paddingTop: '20px',
            width: '100%',
            maxWidth: '500px',
          }}
        >
          Copyright &copy; 2026 Dipesh Satapara. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
