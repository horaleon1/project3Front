import React, { Component } from 'react'
import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 900
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

export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
      <Particles params={particleOpt} id="particles"/>
      <div>
         <h1 className="typingTextStatic">A new generation of </h1>
        <h1 className="typingText animationText">Blockchain</h1>
      </div>
    </div>
    )
  }
}

