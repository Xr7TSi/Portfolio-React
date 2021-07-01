import React from 'react';
import '../styles/style.css';

const styles = {
    navbar: {
        color: 'white',
        backgroundColor: 'rgb(30, 8, 153)',
        fontSize: '28px',
        marginLeft: '25px'
    },
  
  };


function Nav() {
    return (
        <nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
            <div className="container-fluid">
            <a className="navbar-brand" style={styles.navbar} >Jonathan Rein</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="/work.html">Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact.html">Contact</a>
                </li>
                </ul>
            </div>
            </div>
            </nav>
        </nav>
    );
  }


export default Nav;