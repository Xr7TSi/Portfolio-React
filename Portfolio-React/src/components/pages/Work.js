import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

// function Work() {
//     return (
//     <div className="container" id="home-text">
//         <div className="col-md-12">
//             <h1>Here's some text for the work page.</h1>
//         </div>
//     </div>
//     );
//   }

// export default Work;





function Work() {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/work-images/Birthday-Clock-2000x900.png"
            // src="https://www.placecage.com/200/300"
            alt="Tick Tock Birthday Clock"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="./Portfolio-React/src/assets/work-images\News-Flash-2000x900.png"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./Portfolio-React/src/assets/work-images/Weather-Dashboard-2000x900.png"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    );
  }

export default Work;
