import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Software Development Engineer',
      company: 'Finmo',
      period: 'Present',
      description: 'Architecting and developing core payment infrastructure. Optimizing transaction processing speeds and ensuring high availability for financial services.',
      tech: ['React', 'Node.js', 'AWS', 'PostgreSQL']
    },
    // Added a placeholder for previous experience to make it look fuller
    {
      id: 2,
      role: 'SDE Intern',
      company: 'Tech Corp (Example)',
      period: '2022 - 2023',
      description: 'Collaborated with the frontend team to revamp the user dashboard, improving user engagement by 20%.',
      tech: ['JavaScript', 'React', 'CSS']
    }
  ];

  return (
    <section id="experience" className="container right-aligned-section">
      <h2 className="section-title">Experience</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem', 
        width: '100%' 
      }}>
        {experiences.map((exp) => (
          <div key={exp.id} className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-color)' }}>{exp.role}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 500 }}>
                  <Briefcase size={18} />
                  <span>{exp.company}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <Calendar size={16} />
                <span>{exp.period}</span>
              </div>
            </div>
            
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>{exp.description}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
              {exp.tech.map((t) => (
                <span key={t} style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.85rem',
                  background: 'rgba(34, 211, 238, 0.1)',
                  color: 'var(--accent)',
                  border: '1px solid rgba(34, 211, 238, 0.2)'
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
