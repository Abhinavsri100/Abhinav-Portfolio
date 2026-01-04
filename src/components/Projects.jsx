import React, { useState } from 'react';
import { ExternalLink, Github, Code, Cpu, Layout } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all'); // all, dev, ai

  const projects = [
    {
      id: 1,
      title: 'Neural Vision AI',
      category: 'ai',
      description: 'Advanced computer vision system for real-time object detection and classification.',
      image: '/src/assets/ai_bg.png',
      tags: ['Python', 'TensorFlow', 'OpenCV'],
      links: { demo: '#', github: '#' }
    },
    {
      id: 2,
      title: 'E-Commerce Dashboard',
      category: 'dev',
      description: 'Full-stack analytics dashboard for online retailers with real-time data visualization.',
      image: '/src/assets/dev_bg.png',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      links: { demo: '#', github: '#' }
    },
    {
      id: 3,
      title: 'Predictive Market Bot',
      category: 'ai',
      description: 'LSTM-based neural network for predicting cryptocurrency market trends.',
      image: '/src/assets/ai_bg.png',
      tags: ['Python', 'Keras', 'Pandas'],
      links: { demo: '#', github: '#' }
    },
     {
      id: 4,
      title: 'SaaS Landing Page',
      category: 'dev',
      description: 'High-converting landing page with 3D elements and smooth scroll animations.',
      image: '/src/assets/dev_bg.png',
      tags: ['Three.js', 'React', 'GSAP'],
      links: { demo: '#', github: '#' }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="container right-aligned-section" style={{ marginTop: '0', padding: '0 5%' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '4rem' }}>
        <h2 className="section-title">Featured Projects</h2>
        
        <div style={{ 
          display: 'inline-flex', 
          background: 'var(--card-bg)', 
          padding: '0.5rem', 
          borderRadius: '50px',
          border: '1px solid rgba(148, 163, 184, 0.1)'
        }}>
          {[
            { id: 'all', label: 'All', icon: Layout },
            { id: 'dev', label: 'Development', icon: Code },
            { id: 'ai', label: 'AI / ML', icon: Cpu }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              style={{
                background: filter === item.id ? 'var(--primary)' : 'transparent',
                color: filter === item.id ? 'white' : 'var(--text-muted)',
                border: 'none',
                padding: '0.5rem 1.5rem',
                borderRadius: '50px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 500,
                transition: 'all 0.3s ease'
              }}
            >
              <item.icon size={16} />
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {filteredProjects.map((project) => (
          <div key={project.id} className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={project.image} 
                alt={project.title}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: project.category === 'ai' ? 'var(--secondary)' : 'var(--accent)',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '50px',
                fontSize: '0.75rem',
                fontWeight: 700
              }}>
                {project.category.toUpperCase()}
              </div>
            </div>
            
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-color)' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ 
                    fontSize: '0.75rem', 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '4px',
                    background: 'rgba(109, 40, 217, 0.1)',
                    color: 'var(--primary)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.links.github} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <Github size={16} /> Code
                </a>
                <a href={project.links.demo} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 500 }}>
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
