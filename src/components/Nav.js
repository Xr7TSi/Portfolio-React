import React from 'react';
import '../styles/style.css';

const styles = {
    navbarLogo: {
        color: 'white',
        // backgroundColor: 'rgb(30, 8, 153)',
        fontSize: '28px',
        marginLeft: '25px'
    },

    navbarBackground: {
      // backgroundColor: 'white'
      backgroundColor: 'black'
    },

    navbarLocation: {
      backgroundColor: 'black',
      border: 'none',
      marginTop: '6px'
    },
  };



  // function Nav({ currentPage, handlePageChange }) {
  //   return (
      
  //     <ul className="nav nav-tabs"style={styles.navbarBackground}>
  //         <a className="navbar-brand" style={styles.navbarLogo} >Jonathan Rein</a>
  //       <li className="nav-item">
  //         <a style={styles.navbarLocation}
  //           href="#About"
  //           onClick={() => handlePageChange('About')}
  //           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
  //         >
  //           About
  //         </a>
  //       </li>
  //       <li className="nav-item">
  //         <a style={styles.navbarLocation}
  //           href="#work"
  //           onClick={() => handlePageChange('Work')}
  //           className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
  //         >
  //           Work
  //         </a>
  //       </li>
    
  //       <li className="nav-item">
  //         <a style={styles.navbarLocation}
  //           href="#contact"
  //           onClick={() => handlePageChange('Contact')}
  //           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
  //         >
  //           Contact
  //         </a>
  //       </li>
  //     </ul>
  //   );
  // }


  function Nav({ currentPage, handlePageChange }) { 
    if (window.innerWidth <= 760)
    return (

      <ul className="nav nav-tabs"style={styles.navbarBackground}>
          <a className="navbar-brand" style={styles.navbarLogo} >Jonathan Rein &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
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
      </ul>
    ); 

    if (window.innerWidth >= 761)
    return (

      <ul className="nav nav-tabs"style={styles.navbarBackground}>
          <a className="navbar-brand" style={styles.navbarLogo} >Jonathan Rein</a>
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
      </ul>
    ); 
  }


export default Nav;