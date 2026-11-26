import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(11, 17, 32, 0.88)'
          : 'rgba(11, 17, 32, 0.45)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(30, 41, 59, 0.85)'
          : '1px solid transparent',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand / Monogram */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #151F32 0%, #0B1120 100%)',
              border: '1.5px solid rgba(56, 189, 248, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)',
            }}
          >
            <span
              style={{
                fontSize: '0.88rem',
                fontWeight: '800',
                color: 'var(--primary-accent)',
                letterSpacing: '-0.03em',
              }}
            >
              DS
            </span>
          </div>
          <div>
            <span
              style={{
                fontSize: '1.05rem',
                fontWeight: '700',
                color: 'var(--text-main)',
                letterSpacing: '-0.01em',
              }}
            >
              Dipesh Satapara
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="nav-desktop-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: isActive ? '600' : '500',
                  color: isActive ? 'var(--primary-accent)' : 'var(--text-secondary)',
                  position: 'relative',
                  padding: '6px 0',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--primary-accent)',
                      borderRadius: '2px',
                      boxShadow: '0 0 8px var(--primary-accent)',
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action: Highlighted Download Resume Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href={personalInfo.resumeUrl}
            download="Dipesh_Satapara_Resume.pdf"
            className="btn btn-primary btn-sm nav-resume-btn"
            style={{
              gap: '8px',
              padding: '9px 18px',
              fontSize: '0.85rem',
            }}
          >
            <Download size={15} />
            <span>Download Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid #1E293B',
              borderRadius: '8px',
              padding: '8px',
              color: 'var(--text-main)',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            background: 'rgba(11, 17, 32, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid #1E293B',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: activeSection === link.id ? '600' : '500',
                color: activeSection === link.id ? 'var(--primary-accent)' : 'var(--text-main)',
                padding: '8px 0',
                borderBottom: '1px solid rgba(30, 41, 59, 0.4)',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            download="Dipesh_Satapara_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{
              marginTop: '10px',
              width: '100%',
              gap: '8px',
            }}
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
