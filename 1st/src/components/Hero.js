import React from "react";
import "../components/css/Hero.css";
import hero from "../assets/hero.png";

export const Hero = () => {
  return (
    <div className="first">
      <div>
        <h3 className="text">
          Develop your skills in a new and unique way with
        </h3>
        <p className="text1" style={{ color: "#D91656" }}>
          EduLift
        </p>
        <p className="text3">
          Our learning platform empowers learners with expert-led courses,
          hands-on projects, and a supportive community, offering the tools
          needed to achieve your goals and grow your skills. Join us and start
          learning today!These platforms connect learners worldwide, fostering
          collaboration and cultural exchange.
        </p>
        <div style={{ marginLeft: "180px" , marginTop:"40px"}}>
          <button
            className="btn custom ms-3"
            style={{
              background: "linear-gradient(to right, #6C48C5, #ED3EF7)",
              color: "white",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
            type="submit"
          >
          Enroll Now
          </button>
        </div>
      </div>
      <div>
        <img className="image1" src={hero}></img>
      </div>
    </div>
  );
};

export default Hero;
