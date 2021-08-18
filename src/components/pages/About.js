import React from 'react';
import Typist from 'react-typist';



function About() {
  return (
  <div className="container" id="home-text">
      <div className="col-md-12">
          <h1>Hi. I'm Jonathan.  </h1>
          <br></br>
          <Typist>
          <h3>I'm a full-stack web developer.</h3>
          <Typist.Delay ms={500} />
          <h3> I work with React.js, Express, Node.js, and MongoDB.</h3>
          <Typist.Delay ms={1000} />
          <h3> Click "Work" to see some of my projects.</h3>
          </Typist>
      
          
      </div>
  </div>
  );
}



export default About;
