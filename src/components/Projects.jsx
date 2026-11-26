import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  LayoutDashboard,
  Maximize2,
  X,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeViewIndices, setActiveViewIndices] = useState({
    'olist-ecommerce': 0,
  });

  const handleViewChange = (projectId, index, e) => {
    e.stopPropagation();
    setActiveViewIndices((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <LayoutDashboard size={13} />
            <span>Portfolio Work</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world business intelligence and analytics projects focused on extracting value from enterprise datasets.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          className="project-featured-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
            gap: '32px',
            alignItems: 'stretch',
          }}
        >
          {projectsData.map((project) => {
            const currentViewIndex = activeViewIndices[project.id] || 0;
            const currentView =
              project.dashboardViews && project.dashboardViews.length > 0
                ? project.dashboardViews[currentViewIndex]
                : null;
            const displayImage = currentView ? currentView.image : project.image;

            return (
              <div
                key={project.id}
                className="premium-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: project.isFeatured
                    ? '1.5px solid rgba(56, 189, 248, 0.35)'
                    : '1px dashed rgba(148, 163, 184, 0.25)',
                  background: 'linear-gradient(180deg, #151F32 0%, #0F1726 100%)',
                  opacity: project.isPlaceholder ? 0.85 : 1,
                }}
              >
                {/* Dashboard Screenshot Preview / Media Frame */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 9.5',
                    overflow: 'hidden',
                    background: '#090E17',
                    borderBottom: '1px solid rgba(30, 41, 59, 0.8)',
                    cursor: project.isPlaceholder ? 'default' : 'pointer',
                  }}
                  onClick={() => !project.isPlaceholder && setSelectedProject(project)}
                >
                  <img
                    src={displayImage}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!project.isPlaceholder) e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      if (!project.isPlaceholder) e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />

                  {/* Badge Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      display: 'flex',
                      gap: '8px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '5px 12px',
                        borderRadius: 'var(--radius-full)',
                        background: project.isFeatured ? '#0B1120' : '#1E293B',
                        color: project.isFeatured ? 'var(--primary-accent)' : 'var(--text-muted)',
                        border: `1px solid ${project.isFeatured ? 'rgba(56, 189, 248, 0.4)' : '#334155'}`,
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.6)',
                      }}
                    >
                      {project.isFeatured ? 'Featured Case Study' : 'Planned Project'}
                    </span>
                  </div>

                  {/* Quick Expand button */}
                  {!project.isPlaceholder && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      aria-label="Expand Dashboard Preview"
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(11, 17, 32, 0.85)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        color: 'var(--text-main)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--primary-accent)';
                        e.currentTarget.style.color = '#070D18';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(11, 17, 32, 0.85)';
                        e.currentTarget.style.color = 'var(--text-main)';
                      }}
                    >
                      <Maximize2 size={16} />
                    </button>
                  )}

                  {/* Dashboard View Switcher Tabs (Bottom overlay on screenshot) */}
                  {project.dashboardViews && project.dashboardViews.length > 0 && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '12px',
                        right: '12px',
                        display: 'flex',
                        gap: '6px',
                        background: 'rgba(11, 17, 32, 0.88)',
                        backdropFilter: 'blur(10px)',
                        padding: '6px',
                        borderRadius: '10px',
                        border: '1px solid rgba(30, 41, 59, 0.9)',
                        overflowX: 'auto',
                      }}
                    >
                      {project.dashboardViews.map((view, idx) => {
                        const isCurrent = currentViewIndex === idx;
                        return (
                          <button
                            key={view.id}
                            onClick={(e) => handleViewChange(project.id, idx, e)}
                            style={{
                              padding: '5px 12px',
                              borderRadius: '6px',
                              border: isCurrent
                                ? '1px solid rgba(56, 189, 248, 0.5)'
                                : '1px solid transparent',
                              background: isCurrent
                                ? 'rgba(56, 189, 248, 0.15)'
                                : 'transparent',
                              color: isCurrent
                                ? 'var(--primary-accent)'
                                : 'var(--text-secondary)',
                              fontSize: '0.75rem',
                              fontWeight: isCurrent ? '700' : '500',
                              cursor: 'pointer',
                              whiteSpace: 'nowrap',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {view.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Project Body */}
                <div
                  style={{
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  {/* Category */}
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--primary-accent)',
                      marginBottom: '8px',
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: '700',
                      color: 'var(--text-main)',
                      letterSpacing: '-0.02em',
                      marginBottom: '12px',
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.92rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                      marginBottom: '20px',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '26px',
                    }}
                  >
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: '600',
                          padding: '4px 12px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(56, 189, 248, 0.08)',
                          color: 'var(--text-main)',
                          border: '1px solid rgba(56, 189, 248, 0.18)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div
                    style={{
                      marginTop: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      flexWrap: 'wrap',
                    }}
                  >
                    {!project.isPlaceholder ? (
                      <>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="btn btn-primary btn-sm"
                          style={{ gap: '6px' }}
                        >
                          <ExternalLink size={15} />
                          <span>View Project</span>
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                          style={{ gap: '6px' }}
                        >
                          <Github size={15} />
                          <span>GitHub Repository</span>
                        </a>
                      </>
                    ) : (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: 'var(--text-muted)',
                          fontSize: '0.85rem',
                          fontWeight: '500',
                        }}
                      >
                        <Clock size={16} />
                        <span>In Development • Details will be published upon release</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: View Project Detailed Lightbox */}
        {selectedProject && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(5, 10, 20, 0.88)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="premium-card"
              style={{
                width: '100%',
                maxWidth: '960px',
                maxHeight: '92vh',
                overflowY: 'auto',
                background: '#151F32',
                border: '1.5px solid rgba(56, 189, 248, 0.4)',
                padding: '28px',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(11, 17, 32, 0.8)',
                  border: '1px solid #1E293B',
                  borderRadius: '8px',
                  color: 'var(--text-main)',
                  padding: '8px',
                  cursor: 'pointer',
                  zIndex: 10,
                }}
              >
                <X size={20} />
              </button>

              <div style={{ marginBottom: '16px', paddingRight: '40px' }}>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--primary-accent)',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {selectedProject.category}
                </span>
                <h3
                  style={{
                    fontSize: '1.65rem',
                    fontWeight: '800',
                    color: 'var(--text-main)',
                    marginTop: '4px',
                  }}
                >
                  {selectedProject.title}
                </h3>
              </div>

              {/* View Switcher in Modal */}
              {selectedProject.dashboardViews && selectedProject.dashboardViews.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '16px',
                    borderBottom: '1px solid #1E293B',
                    paddingBottom: '12px',
                    overflowX: 'auto',
                  }}
                >
                  {selectedProject.dashboardViews.map((view, vIdx) => {
                    const isSelected = (activeViewIndices[selectedProject.id] || 0) === vIdx;
                    return (
                      <button
                        key={view.id}
                        onClick={() => handleViewChange(selectedProject.id, vIdx, { stopPropagation: () => {} })}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '8px',
                          border: isSelected
                            ? '1px solid rgba(56, 189, 248, 0.5)'
                            : '1px solid #1E293B',
                          background: isSelected
                            ? 'rgba(56, 189, 248, 0.15)'
                            : 'rgba(11, 17, 32, 0.6)',
                          color: isSelected ? 'var(--primary-accent)' : 'var(--text-secondary)',
                          fontSize: '0.85rem',
                          fontWeight: isSelected ? '700' : '500',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <span>{view.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Large Image Preview with crisp shadow */}
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #1E293B',
                  marginBottom: '18px',
                  background: '#090E17',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <img
                  src={
                    selectedProject.dashboardViews && selectedProject.dashboardViews.length > 0
                      ? selectedProject.dashboardViews[activeViewIndices[selectedProject.id] || 0].image
                      : selectedProject.image
                  }
                  alt={selectedProject.title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* View Description */}
              {selectedProject.dashboardViews && selectedProject.dashboardViews.length > 0 && (
                <div
                  style={{
                    background: 'rgba(11, 17, 32, 0.5)',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #1E293B',
                    marginBottom: '18px',
                  }}
                >
                  <span style={{ fontSize: '0.82rem', color: 'var(--primary-accent)', fontWeight: '600' }}>
                    Dashboard View Highlight:
                  </span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    {selectedProject.dashboardViews[activeViewIndices[selectedProject.id] || 0].description}
                  </p>
                </div>
              )}

              {/* Project summary */}
              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: '1.65',
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                }}
              >
                {selectedProject.description}
              </p>

              {/* Tech Stack */}
              <div style={{ marginBottom: '24px' }}>
                <h4
                  style={{
                    fontSize: '0.82rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '10px',
                    letterSpacing: '0.05em',
                  }}
                >
                  Technologies Applied
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {selectedProject.technologies.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '6px 14px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                        borderRadius: '6px',
                        color: 'var(--text-main)',
                        fontSize: '0.82rem',
                        fontWeight: '600',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Github size={16} />
                  <span>Open GitHub Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn btn-secondary"
                >
                  <span>Close Preview</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
