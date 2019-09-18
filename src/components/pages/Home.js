import React from "react";
import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 400
      },
      color: {
        value: "#FE280A"
      },
    },
    
    "move": {
      "enable": true,
      "speed": 2.0,
      "direction": "right",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
      }
  }
  }
};

const Home = () => {
  return (
    <div className="homeContainer">
      <Particles params={particleOpt} />
    </div>
  );
};

export default Home;
