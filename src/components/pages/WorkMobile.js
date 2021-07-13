import React from "react";

import birthday from "../../assets/work-images/Birthday-Clock-350x219.png";
import news from "../../assets/work-images/News-Flash-350x219.png";
import weather from "../../assets/work-images/Weather-Dashboard-350x219.png";
import workday from "../../assets/work-images/Work-Day-Scheduler-350x219.png";

const styles = {

  caption: {
    color: "white",
    textAlign: "center"
  },

  buttonPrimary: {
    color: "white",
    backgroundColor: "rgb(30, 8, 153)",
    fontSize: "28px",
    marginLeft: "5px",
    marginRight: "5px",
    marginTop: "45px",
  },

};


// additional styling in styles/styles.css

function WorkMobile() {
  return (
 
   <section>
     <div className="image-container">
     <img src={news} alt="News Flash" />
     </div>
      <div>
        <h5 style={styles.caption}>
        News Flash gathers news based on the user's news category preferences.
      </h5>
      <h5 style={styles.caption}>
        It's built with JavaScript. It uses APIs, bootstrap and local storage.
      </h5>
      <div className="button-container">
        <a
          href="https://github.com/Xr7TSi/News-Flash"
          className="btn btn-primary"
          style={styles.buttonPrimary}
          target="_blank" rel="noopener noreferrer"
        >
          <h5>See the repo</h5>
        </a>
        <a
          href="https://xr7tsi.github.io/News-Flash/"
          className="btn btn-primary"
          style={styles.buttonPrimary}
          target="_blank" rel="noopener noreferrer"
        >
          <h5>See it deployed</h5>
        </a>
        </div>
    </div>


    <div className="image-container">
     <img src={weather} alt="Weather Dashboard" />
    </div> 
      <div>
        <h5 style={styles.caption}>
        Weather Dashboard provides weather data for any city in the world.
      </h5>
      <h5 style={styles.caption}>
      It's built with JavaScript. It uses APIs, bootstrap and local
            storage.
      </h5>
      <div className="button-container">
        <a
          href="https://github.com/Xr7TSi/Weather-Dashboard"
          className="btn btn-primary"
          style={styles.buttonPrimary}
          target="_blank" rel="noopener noreferrer"
        >
          <h5>See the repo</h5>
        </a>
        <a
          href="https://xr7tsi.github.io/Weather-Dashboard/"
          className="btn btn-primary"
          style={styles.buttonPrimary}
          target="_blank" rel="noopener noreferrer"
        >
          <h5>See it deployed</h5>
        </a>
        </div>
    </div>

    <div className="image-container">
     <img src={birthday} alt="Birthday Clock"/>
    </div> 
      <div>
        <h5 style={styles.caption}>
        Tick Tock Birthday Clock is a place to create and share birthday
            wishlists.
      </h5>
      <h5 style={styles.caption}>
      It's built with JavaScript. It uses mysql, bcrypt, dotenv, express,
            handlebars, bootstrap, session and sequelize.
      </h5>
      <div className="button-container">
        <a
          href="https://github.com/Xr7TSi/Tick-Tock-Birthday-Clock/"
          className="btn btn-primary"
          style={styles.buttonPrimary}
          target="_blank" rel="noopener noreferrer"
        >
          <h5>See the repo</h5>
        </a>
        <a
          href="https://tick-tock-birthday-clock.herokuapp.com/"
          className="btn btn-primary"
          style={styles.buttonPrimary}
          target="_blank" rel="noopener noreferrer"
        >
          <h5>See it deployed</h5>
        </a>
        </div>
    </div>

    <div className="image-container">
     <img src={workday} alt="Workday Scheduler"/>
    </div> 
      <div>
        <h5 style={styles.caption}>
        Workday Scheduler is a day planner.
      </h5>
      <h5 style={styles.caption}>
      It's built with JavaScript. It uses moment.js, bootstrap and local
            storage.
      </h5>
      <div className="button-container">
        <a
          href="https://github.com/Xr7TSi/Workday-Scheduler/"
          className="btn btn-primary"
          style={styles.buttonPrimary}
          target="_blank" rel="noopener noreferrer"
        >
          <h5>See the repo</h5>
        </a>
        <a
          href="https://xr7tsi.github.io/Workday-Scheduler/"
          className="btn btn-primary"
          style={styles.buttonPrimary}
          target="_blank" rel="noopener noreferrer"
        >
          <h5>See it deployed</h5>
        </a>
        </div>
    </div>

   </section>
 
  );
}

export default WorkMobile;
