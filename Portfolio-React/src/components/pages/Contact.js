import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import githubLogo from "../../assets/contact-images/github-logo.png";
import linkedinLogo from "../../assets/contact-images/linkedin-logo.png";
import resumeLogo from "../../assets/contact-images/resume-logo.png";
import stravaLogo from "../../assets/contact-images/strava-logo.jpg";



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
    <Container>
  <Row>
  <Col xs={6} md={4}>
      <Image src={githubLogo} rounded />
  </Col>
  
  <Col xs={6} md={4}>
      <Image src={linkedinLogo} rounded />
  </Col>

  <Col xs={6} md={4}>
      <Image src={resumeLogo} rounded />
  </Col>

  <Col xs={6} md={4}>
      <Image src={stravaLogo} rounded />
  </Col>


    <Col sm={3}>
    <a href="https://github.com/Xr7TSi"  className="btn btn-primary" style={styles.navbar}><h5>GitHub</h5></a>
    </Col>

    <Col sm={3}>
    <a href="https://www.linkedin.com/in/jonathan-rein" className="btn btn-primary" style={styles.navbar}><h5>Linkedin</h5></a>
    </Col>

    <Col sm={3}>
    <a href="https://docs.google.com/document/d/e/2PACX-1vQNIXOZBbExarlcZ2Bx8j77IGd1GlLuicBgRYirct5Ru1CEIHU57YNGps_HXoIj_IOZ6AWQYV1ZtuSm/pub" class="btn btn-primary" style={styles.navbar}><h5>Resume</h5></a>
    </Col>

    <Col sm={3}>
    <a href="https://www.strava.com/athletes/jonathan_rein" className="btn btn-primary" style={styles.navbar}><h5>Strava</h5></a>
    </Col>

  </Row>

  <Row>
    <Col sm={3}>
    <a href="mailto: jrein1296@gmail.com" className="btn btn-primary" style={styles.navbar}><h5>jrein1296@gmail.com</h5></a>
    </Col>

    <Col sm={3}>
    <a href="tel:404-667-3545" className="btn btn-primary" style={styles.navbar}><h5>404-667-3545</h5></a>
    </Col>
   
  </Row>
 
</Container>
  );
}
  
  export default Contact;