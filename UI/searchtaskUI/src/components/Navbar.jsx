import React, { useEffect, useRef } from 'react';
import SearchBox from './SearchBox';

export default function Navbar({ onSelect }) {
  const navRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!navRef.current?.contains(e.target)) {
        const input = document.querySelector('#search-input');
        if (input) input.blur();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav style={styles.navbar} ref={navRef}>
      <div style={styles.logo}>LMS</div>
      <SearchBox onSelect={onSelect} />
      <div style={styles.buttons}>
  
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 24px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: { 
    fontSize: '22px', 
    fontWeight: '700', 
    color: '#2c3e50', 
    letterSpacing: '0.5px' 
  },
  buttons: { display: 'flex', gap: '12px' },
};
