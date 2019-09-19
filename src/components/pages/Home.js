import React from "react";
import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1000
      },
      color: {
        value: "#FE280A"
      },
    },
    
    "move": {
      "enable": true,
      "speed": 1.5,
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
      <div>
         <h1 className="typingTextStatic">A new generation of </h1>
        <h1 className="typingText animationText">Blockchain</h1>
      </div>
    </div>
  );
};

export default Home;
