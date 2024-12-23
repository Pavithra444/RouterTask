
import React from 'react';
import { Link } from 'react-router-dom';
import  './Navbar.css';
const Navbar = () => {
  return (
    <nav>
      <ul style={styles.navbar}>
        <li style={styles.navItem}><Link to="/" style={styles.link}>All</Link></li>
        <li style={styles.navItem}><Link to="/full-stack-development" style={styles.link}>Full Stack Development</Link></li>
        <li style={styles.navItem}><Link to="/data-science" style={styles.link}>Data Science</Link></li>
        <li style={styles.navItem}><Link to="/cyber-security" style={styles.link}>Cyber Security</Link></li>
        <li style={styles.navItem}><Link to="/career" style={styles.link}>Career</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: '10px 0',
    margin: 0,
  },
  navItem: {
    margin: '0 20px',
  },
  link: {
    textDecoration: 'none',
    fontSize: '18px',
    color: 'black',
  }
};

export default Navbar;
