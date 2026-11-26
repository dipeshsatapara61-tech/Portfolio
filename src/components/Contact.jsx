import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MessageSquare,
  CheckCircle2,
  Copy,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending / preparing message
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={13} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have an opportunity or an interesting project? Let's connect and create something meaningful.
          </p>
        </div>

        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto',
            alignItems: 'start',
          }}
        >
          {/* LEFT: 3 Contact Options */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {/* Option 1: LinkedIn */}
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card"
              style={{
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                border: '1px solid var(--border-color)',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Linkedin size={22} color="#38BDF8" />
              </div>
              <div style={{ flexGrow: 1 }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontWeight: '600',
                    color: 'var(--text-muted)',
                  }}
                >
                  Professional Network
                </span>
                <h4
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: 'var(--text-main)',
                  }}
                >
                  LinkedIn
                </h4>
                <span
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--primary-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: '2px',
                  }}
                >
                  <span>Connect with Dipesh</span>
                  <ExternalLink size={12} />
                </span>
              </div>
            </a>

            {/* Option 2: GitHub */}
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card"
              style={{
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                border: '1px solid var(--border-color)',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(129, 140, 248, 0.1)',
                  border: '1px solid rgba(129, 140, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Github size={22} color="#818CF8" />
              </div>
              <div style={{ flexGrow: 1 }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontWeight: '600',
                    color: 'var(--text-muted)',
                  }}
                >
                  Code &amp; Repositories
                </span>
                <h4
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: 'var(--text-main)',
                  }}
                >
                  GitHub
                </h4>
                <span
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--secondary-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: '2px',
                  }}
                >
                  <span>github.com/dipeshsatapara61-tech</span>
                  <ExternalLink size={12} />
                </span>
              </div>
            </a>

            {/* Option 3: Direct Email */}
            <div
              className="premium-card"
              style={{
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                border: '1px solid var(--border-color)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Mail size={22} color="#38BDF8" />
              </div>
              <div style={{ flexGrow: 1 }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontWeight: '600',
                    color: 'var(--text-muted)',
                  }}
                >
                  Email Inquiry
                </span>
                <h4
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: 'var(--text-main)',
                  }}
                >
                  Direct Email
                </h4>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '4px',
                    flexWrap: 'wrap',
                  }}
                >
                  <a
                    href={`mailto:${personalInfo.socialLinks.email}`}
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--primary-accent)',
                      fontFamily: 'var(--font-mono)',
                      textDecoration: 'none',
                    }}
                  >
                    {personalInfo.socialLinks.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    style={{
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      borderRadius: '6px',
                      padding: '3px 8px',
                      color: copiedEmail ? '#10B981' : 'var(--primary-accent)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.72rem',
                    }}
                  >
                    {copiedEmail ? (
                      <>
                        <CheckCircle2 size={13} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Simple Clean Contact Form */}
          <div
            className="premium-card"
            style={{
              padding: '36px 32px',
              border: '1px solid var(--border-color)',
              background: 'linear-gradient(180deg, #151F32 0%, #0F1726 100%)',
            }}
          >
            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: 'var(--text-main)',
                marginBottom: '8px',
              }}
            >
              Send a Direct Message
            </h3>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                marginBottom: '24px',
              }}
            >
              Feel free to reach out for analyst roles, internships, or data inquiries.
            </p>

            {formSubmitted ? (
              <div
                style={{
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <CheckCircle2 size={36} color="#10B981" />
                <h4 style={{ color: '#F8FAFC', fontSize: '1.1rem', fontWeight: '700' }}>
                  Message Prepared Successfully!
                </h4>
                <p style={{ color: '#94A3B8', fontSize: '0.88rem' }}>
                  Thank you, <strong>{formData.name || 'there'}</strong>! Your inquiry will be forwarded directly to <strong>{personalInfo.socialLinks.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      color: 'var(--text-muted)',
                      marginBottom: '8px',
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name or organization"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(11, 17, 32, 0.7)',
                      border: '1px solid #1E293B',
                      color: 'var(--text-main)',
                      fontSize: '0.92rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--primary-accent)')}
                    onBlur={(e) => (e.target.style.borderColor = '#1E293B')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      color: 'var(--text-muted)',
                      marginBottom: '8px',
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(11, 17, 32, 0.7)',
                      border: '1px solid #1E293B',
                      color: 'var(--text-main)',
                      fontSize: '0.92rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--primary-accent)')}
                    onBlur={(e) => (e.target.style.borderColor = '#1E293B')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      color: 'var(--text-muted)',
                      marginBottom: '8px',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share project requirements, analyst opportunities, or any question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(11, 17, 32, 0.7)',
                      border: '1px solid #1E293B',
                      color: 'var(--text-main)',
                      fontSize: '0.92rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--primary-accent)')}
                    onBlur={(e) => (e.target.style.borderColor = '#1E293B')}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    marginTop: '8px',
                    gap: '8px',
                  }}
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
