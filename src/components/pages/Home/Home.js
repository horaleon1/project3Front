import React, { useEffect } from "react";
import Particles from "react-particles-js";
import "./home.css";

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
      }
    },

    move: {
      enable: true,
      speed: 1.5,
      direction: "right",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  }
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="homeContainer">
      <Particles params={particleOpt} id="particles" />
      <div className="textsContainer">
        <h1 className="typingTextStatic"> Mundo</h1>
        <h1 className="typingText animationText">Blockchain</h1>
      </div>
    </div>
  );
};

export default Home;
