import React from "react";
import '../components/css/Hero.css'
import logo from "../assets/logo.png";


export const Hero = () => {
  return (
    <div className="first">

      <div>
       <h3 className='text' >Unlock Your Potential with<br></br>  Our Learning Platform</h3>
       <p className='text1' style={{color:"#D91656"}}>EduLift</p>

      </div>
      <div>
        <img className='image1' src={logo}></img>
      </div>
    </div>
  );
};

export default Hero;
