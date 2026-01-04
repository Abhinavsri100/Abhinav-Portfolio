import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailing, setTrailing] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    // Smooth follow effect loop
    let requestRef;
    
    const animate = () => {
      setTrailing(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15
      }));
      requestRef = requestAnimationFrame(animate);
    };
    
    requestRef = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef);
  }, [position]);

  if (hidden) return null;

  return (
    <>
      {/* Main dot */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--accent)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'opacity 0.2s',
          mixBlendMode: 'difference'
        }} 
      />
      {/* Trailing glow */}
      <div 
        style={{
          position: 'fixed',
          top: -15, // Offset to center around the cursor
          left: -15,
          width: '40px',
          height: '40px',
          border: '1px solid var(--primary)',
          backgroundColor: 'rgba(109, 40, 217, 0.1)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: `translate(${trailing.x}px, ${trailing.y}px)`,
          transition: 'width 0.2s, height 0.2s',
          backdropFilter: 'blur(1px)'
        }} 
      />
    </>
  );
};

export default CursorFollower;
