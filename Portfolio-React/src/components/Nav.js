import React from 'react';
import '../styles/style.css';

const styles = {
    navbarLogo: {
        color: 'white',
        backgroundColor: 'rgb(30, 8, 153)',
        fontSize: '28px',
        marginLeft: '25px'
    },

    navbarBackground: {
      backgroundColor: 'white'
    },
  };



function Nav({ currentPage, handlePageChange }) {
    return (
      
      <ul className="nav nav-tabs"style={styles.navbarBackground}>
          <a className="navbar-brand" style={styles.navbarLogo} >Jonathan Rein</a>
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#work"
            onClick={() => handlePageChange('Work')}
            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
          >
            Work
          </a>
        </li>
    
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  }






export default Nav;