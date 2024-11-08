import React from "react";
import '../components/css/Hero.css'
import hero from "../assets/hero.png";


export const Hero = () => {
  return (
    <div className="first">

      <div>
       <h3 className='text' >Develop your skills in a new and unique way with</h3>
       <p className='text1' style={{color:"#D91656"}}>EduLift</p>

      </div>
      <div>
        <img className='image1' src={hero}></img>
      </div>
    </div>
  );
};

export default Hero;
