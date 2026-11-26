import React from 'react';
import {
  TrendingUp,
  BarChart3,
  Target,
  Lightbulb,
  CheckCircle2,
  Database,
  LayoutDashboard,
  FileSpreadsheet,
  Terminal,
  PieChart,
  HardDrive,
  BookOpen,
  Cloud,
  GitBranch,
  Wrench,
  Cpu,
  LineChart
} from 'lucide-react';
import { skillsData } from '../data/skills';

// Helper to map icon names to Lucide icons or custom SVG for PostgreSQL/PowerBI/Excel
const getSkillIcon = (name) => {
  switch (name) {
    // Business & Analytics
    case 'Business Analysis':
      return <TrendingUp size={18} color="#38BDF8" />;
    case 'Data Analysis':
      return <BarChart3 size={18} color="#38BDF8" />;
    case 'KPI Analysis':
      return <Target size={18} color="#38BDF8" />;
    case 'Business Insights':
      return <Lightbulb size={18} color="#38BDF8" />;
    case 'Problem Solving':
      return <CheckCircle2 size={18} color="#38BDF8" />;

    // Technical Skills
    case 'SQL':
      return <Database size={18} color="#818CF8" />;
    case 'Power BI':
      return <LayoutDashboard size={18} color="#F59E0B" />;
    case 'Excel':
      return <FileSpreadsheet size={18} color="#10B981" />;
    case 'Python':
      return <Terminal size={18} color="#38BDF8" />;
    case 'Data Visualization':
      return <PieChart size={18} color="#818CF8" />;

    // Tools
    case 'PostgreSQL':
      return <HardDrive size={18} color="#38BDF8" />;
    case 'Jupyter Notebook':
      return <BookOpen size={18} color="#F97316" />;
    case 'Google Colab':
      return <Cloud size={18} color="#EAB308" />;
    case 'GitHub':
      return <GitBranch size={18} color="#F8FAFC" />;

    default:
      return <CheckCircle2 size={18} color="#38BDF8" />;
  }
};

const Skills = () => {
  const categories = [
    {
      data: skillsData.businessAnalytics,
      accentColor: '#38BDF8',
      headerIcon: <LineChart size={22} color="#38BDF8" />,
    },
    {
      data: skillsData.technicalSkills,
      accentColor: '#818CF8',
      headerIcon: <Cpu size={22} color="#818CF8" />,
    },
    {
      data: skillsData.tools,
      accentColor: '#38BDF8',
      headerIcon: <Wrench size={22} color="#38BDF8" />,
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={13} />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">My Skills &amp; Tools</h2>
          <p className="section-subtitle">
            A focused toolkit spanning quantitative analysis, relational databases, business intelligence, and analytics workflows.
          </p>
        </div>

        {/* 3 Categorized Skill Cards */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginTop: '20px',
          }}
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="premium-card"
              style={{
                padding: '30px 24px',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border-color)',
                background: 'linear-gradient(180deg, #151F32 0%, #101826 100%)',
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '14px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid rgba(30, 41, 59, 0.8)',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                  }}
                >
                  {cat.headerIcon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: '700',
                      color: 'var(--text-main)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {cat.data.category}
                  </h3>
                </div>
              </div>

              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                  lineHeight: '1.5',
                }}
              >
                {cat.data.description}
              </p>

              {/* Skills List with Recognizable Icons (No fake progress bars) */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginTop: 'auto',
                }}
              >
                {cat.data.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(11, 17, 32, 0.6)',
                      border: '1px solid rgba(30, 41, 59, 0.7)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                      e.currentTarget.style.background = 'rgba(56, 189, 248, 0.05)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(30, 41, 59, 0.7)';
                      e.currentTarget.style.background = 'rgba(11, 17, 32, 0.6)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {getSkillIcon(skill.name)}
                      </div>
                      <span
                        style={{
                          fontSize: '0.92rem',
                          fontWeight: '600',
                          color: 'var(--text-main)',
                        }}
                      >
                        {skill.name}
                      </span>
                    </div>

                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--primary-accent)',
                        opacity: 0.7,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
