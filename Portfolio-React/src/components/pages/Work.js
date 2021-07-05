import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import birthday from '../../assets/work-images/Birthday-Clock-2000x900.png'
import birthdayBlur from '../../assets/work-images/Birthday-Clock-2000x900-blur.png'
import news from '../../assets/work-images/News-Flash-2000x900.png'
import newsBlur from '../../assets/work-images/News-Flash-2000x900-blur.png'
import weather from '../../assets/work-images/Weather-Dashboard-2000x900.png'
import weatherBlur from '../../assets/work-images/Weather-Dashboard-2000x900-blur.png'

const styles = {
  carouselCaption: {
    position: 'absolute',
    top: '150px',
    color: 'black'
  },

};


function Work() {
    return (
        <Carousel fade >

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={birthday}
            alt="Tick Tock Birthday Clock"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={birthdayBlur}
            alt="Tick Tock Birthday Clock blurred"
          />
          <Carousel.Caption style={styles.carouselCaption}>
          <h3>
                     Tick Tock Birthday Clock is a place to create and share birthday wishlists. 
                    </h3>
                    <h3>
                      It's built with JavaScript.  It uses mysql, bcrypt, dotenv, express, handlebars, bootstrap, session and sequelize.  
                     </h3>
                    <h3>
                      <a href="https://github.com/Xr7TSi/Tick-Tock-Birthday-Clock" class="btn btn-primary"><h5>See the repo</h5></a>
                      <a href="https://tick-tock-birthday-clock.herokuapp.com/" class="btn btn-primary"><h5>See it deployed</h5></a>
                    </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={news}
            alt="News Flash"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={newsBlur}
            alt="News Flash blurred"
          />
          <Carousel.Caption style={styles.carouselCaption}>
          <h3>
                     News Flash presents stories pulled from the web based on the user's news category preferences.   
                    </h3>
                    <h3>
                      It's built with JavaScript.  It uses APIs, bootstrap and local storage.   
                     </h3>
                      <h3>
                        <a href="https://github.com/Xr7TSi/News-Flash" class="btn btn-primary"><h5>See the repo</h5></a>
                        <a href="https://xr7tsi.github.io/News-Flash/" class="btn btn-primary"><h5>See it deployed</h5></a>
                      </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={weather}
            alt="Tick Tock Birthday Clock"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={weatherBlur}
            alt="Tick Tock Birthday Clock"
          />
          <Carousel.Caption style={styles.carouselCaption}>
          <h3>
                     Weather Dashboard gives the user the current weather and a five day forecast for any city in the world.
                    </h3>
                    <h3>
                      It's built with JavaScript.  It uses APIs, bootstrap and local storage.  
                     </h3>
                    <h3>
                      <a href="https://github.com/Xr7TSi/Weather-Dashboard" class="btn btn-primary"><h5>See the repo</h5></a>
                      <a href="https://xr7tsi.github.io/Weather-Dashboard/" class="btn btn-primary"><h5>See it deployed</h5></a>
                    </h3>
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    );
  }

export default Work;
