import React from 'react';
// import '../styles/style.css';


const styles = {
    navbar: {
        color: 'white',
        backgroundColor: 'rgb(30, 8, 153)',
        fontSize: '28px',
        marginLeft: '25px'
    },
  
  };


function Contact() {
    return (
        <body>
       
        <div className="row">
        <div className="btn-group" >
      
          <a href="https://github.com/Xr7TSi" className="btn btn-primary" style={styles.navbar}><h5>GitHub</h5></a>
          <a href="https://www.linkedin.com/in/jonathan-rein" className="btn btn-primary" style={styles.navbar}><h5>Linkedin</h5></a>
          <a href="https://docs.google.com/document/d/e/2PACX-1vQNIXOZBbExarlcZ2Bx8j77IGd1GlLuicBgRYirct5Ru1CEIHU57YNGps_HXoIj_IOZ6AWQYV1ZtuSm/pub" class="btn btn-primary" style={styles.navbar}><h5>Resume</h5></a>
          <a href="https://www.strava.com/athletes/jonathan_rein" Name="btn btn-primary" style={styles.navbar}><h5>Strava</h5></a>

        </div>
      </div>
      
      <div className="row">
        <div className="btn-group" >
      
          <a href="mailto: jrein1296@gmail.com" className="btn btn-primary" style={styles.navbar}><h5>jrein1296@gmail.com</h5></a>
          <a href="tel:404-667-3545" className="btn btn-primary" style={styles.navbar}><h5>404-667-3545</h5></a>
          <a href="https://github.com/Xr7TSi" className="btn btn-primary" style={styles.navbar}><h5>GitHub</h5></a>
          <a href="https://www.linkedin.com/in/jonathan-rein" className="btn btn-primary" style={styles.navbar}><h5>Linkedin</h5></a>
         

        </div>
      </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
   
    </body>
    );
  }
  
  export default Contact;