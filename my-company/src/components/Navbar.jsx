import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#282c34',
    padding: '1rem 2rem',
  };

  const logoStyle = {
    color: '#61dafb',
    fontSize: '1.5rem',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '1.5rem',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
  };

  const linkHoverStyle = {
    color: '#61dafb',
  };

  // optional simple hover effect using inline logic
  const [hoveredLink, setHoveredLink] = React.useState(null);

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>MyApp</Link>
      <div style={linkContainerStyle}>
        {['Home', 'About', 'Contact', 'Services'].map((text) => {
          const path = text === 'Home' ? '/' : `/${text.toLowerCase()}`;
          const isHovered = hoveredLink === text;
          return (
            <Link
              key={text}
              to={path}
              style={{ 
                ...linkStyle, 
                ...(isHovered ? linkHoverStyle : {}) 
              }}
              onMouseEnter={() => setHoveredLink(text)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {text}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
