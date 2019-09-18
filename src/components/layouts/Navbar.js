import React from "react";
import { Link } from "react-router-dom";
// import video from '../../assets/video.mp4';
// import Particles from "react-particles-js";

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
      }
    },

    move: {
      enable: true,
      speed: 2.0,
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

const Navbar = () => {
  return (
    <div className="container">
      <ul className="leftSide">
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            About
          </Link>
        </li>
      </ul>
      <ul className="rightSide">
        <li>
          <Link to="/lognin" style={{ textDecoration: "none", color: "white" }}>
            Log In
          </Link>
        </li>
        <li>
          <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
            Sign up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
