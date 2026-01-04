import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ minHeight: '90vh' }}>

      <div className="container hero-content">
        <div style={{ flex: 1 }}>
          <h2 className="animate-fade-in" style={{ 
            fontSize: '1.5rem', 
            color: 'var(--accent)', 
            fontWeight: 600,
            marginBottom: '1rem',
            letterSpacing: '2px'
          }}>
            HELLO, WORLD
          </h2>
          
          <h1 className="animate-fade-in" style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)', // Slightly smaller max size for 2-col layout
            lineHeight: 1.1, 
            marginBottom: '1.5rem',
            animationDelay: '0.2s'
          }}>
            I'm <span className="text-gradient">Abhinav</span><br />
            Srivastava
          </h1>

          <p className="animate-fade-in" style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-muted)', 
            maxWidth: '600px', 
            marginBottom: '2.5rem',
            animationDelay: '0.4s'
          }}>
            Software Development Engineer at <strong>Finmo</strong>. Building scalable financial technologies and crafting exceptional digital experiences.
          </p>

          <div className="animate-fade-in" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', animationDelay: '0.6s' }}>
            <a href="#contact" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Get in touch <ArrowRight size={20} />
            </a>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--text-muted)' }} aria-label="Github"><Github size={24} /></a>
              <a href="#" style={{ color: 'var(--text-muted)' }} aria-label="LinkedIn"><Linkedin size={24} /></a>
              <a href="#" style={{ color: 'var(--text-muted)' }} aria-label="Email"><Mail size={24} /></a>
            </div>
          </div>
        </div>

        {/* 3D Avatar Image */}
        <div className="animate-fade-in" style={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center',
          animationDelay: '0.4s'
        }}>
           <div style={{
             width: '320px',
             height: '320px',
             borderRadius: '50%',
             overflow: 'hidden',
             border: '4px solid rgba(109, 40, 217, 0.3)',
             boxShadow: '0 0 50px rgba(34, 211, 238, 0.2)',
             animation: 'float 6s ease-in-out infinite'
           }}>
             <img 
               src="/src/assets/avatar.png" 
               alt="Abhinav 3D Avatar" 
               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
             />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
