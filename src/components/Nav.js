import React from 'react';
import '../styles/style.css';

const styles = {
    navbarLogo: {
        color: 'white',
        backgroundColor: 'black',
        fontSize: '28px',

    },

    navbarBackground: {
      backgroundColor: 'black'
    },

    navbarText: {
      marginLeft: '25px',
      color: 'white',
    },

    navbarLocation: {
      backgroundColor: 'black',
      border: 'none',
      marginTop: '6px'
    },
  };


  function Nav({ currentPage, handlePageChange }) {
    if (window.innerWidth >= 880)
    return (

      <ul className="nav nav-tabs"style={styles.navbarBackground}>
          <a className="navbar-brand" style={styles.navbarLogo} >Jonathan Rein </a>
        <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#About"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#work"
            onClick={() => handlePageChange('Work')}
            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
          >
            Work
          </a>
        </li>
    
        <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>

        {/* <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#tech"
            onClick={() => handlePageChange('Tech')}
            className={currentPage === 'Tech' ? 'nav-link active' : 'nav-link'}
          >
            Tech
          </a>
        </li> */}
      </ul>
    );

    if (window.innerWidth <= 879)
    return (
    <div>
      <div style={styles.navbarLogo}>
      <a className="nav" style={styles.navbarText} >Jonathan Rein</a>
      </div>
    
        
      <ul className="nav nav-tabs"style={styles.navbarBackground}>
        
        <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#About"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#work"
            onClick={() => handlePageChange('Work')}
            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
          >
            Work
          </a>
        </li>
    
        <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>

        {/* <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#tech"
            onClick={() => handlePageChange('Tech')}
            className={currentPage === 'Tech' ? 'nav-link active' : 'nav-link'}
          >
            Tech
          </a>
        </li> */}
      </ul>
      </div>
    );
  }


export default Nav;