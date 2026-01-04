import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CursorFollower from './components/CursorFollower';
import { Mail, Code2, Database, Globe, Cpu, Server, Layers, GitBranch, Box, FileCode } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const skills = [
    { name: 'JavaScript', icon: FileCode },
    { name: 'React', icon: Code2 },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Code2 },
    { name: 'AWS', icon: Globe },
    { name: 'SQL', icon: Database },
    { name: 'Git', icon: GitBranch },
    { name: 'Docker', icon: Box },
    { name: 'GraphQL', icon: Layers },
    { name: 'TypeScript', icon: FileCode },
  ];

  return (
    <div className="app">
      <CursorFollower />
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Experience />
        <Projects />
        
        {/* Quick Skills Section */}
        <section className="container right-aligned-section" style={{ marginTop: '4rem'}}>
          <h2 className="section-title">Tech Stack</h2>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '1.5rem', 
            maxWidth: '1000px', 
            margin: '0 auto',
            textAlign: 'center' // Ensure text aligns center
          }}>
            {skills.map((skill) => (
              <div key={skill.name} className="glass-card" style={{ 
                padding: '1rem 2rem', 
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                minWidth: '160px', // Uniform width
                justifyContent: 'center'
              }}>
                <skill.icon size={20} style={{ color: 'var(--accent)' }} />
                {skill.name}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="right-aligned-section" style={{ marginTop: '5rem', paddingBottom: '5rem', textAlign: 'center',marginRight: '1rem' }}>
          <div className="container">
            <h2 className="section-title">Let's Connect</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 2rem' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a href="mailto:srivastavabhinav556@gmail.com" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={20} /> Say Hello
            </a>
          </div>
        </section>
      </main>

      <footer style={{ 
        padding: '2rem 0', 
        textAlign: 'center', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        color: 'var(--text-muted)',
        fontSize: '0.9rem' 
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Abhinav Srivastava. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
