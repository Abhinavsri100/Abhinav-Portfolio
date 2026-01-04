import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'all 0.3s ease',
      padding: scrolled ? '1rem 0' : '2rem 0',
      background: scrolled ? 'var(--bg-color)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(148, 163, 184, 0.1)' : 'none'
    }}>
      <div className="container" style={{ 
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%',
        margin: '0 auto' 
        }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '1px' }}>
          ABHINAV<span style={{ color: 'var(--primary)' }}>.</span>
        </a>
        
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={{ display: 'flex', gap: '2rem' }}>
            {['Home', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: 500,
                    color: 'var(--text-color)',
                    opacity: 0.8
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '1'}
                  onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: '1px solid var(--text-muted)',
              color: 'var(--text-color)',
              padding: '0.5rem',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '2rem',
              width: '40px',
              height: '40px',
              transition: 'all 0.3s ease'
            }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
