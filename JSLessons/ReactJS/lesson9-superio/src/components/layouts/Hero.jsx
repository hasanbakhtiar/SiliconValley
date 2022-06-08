import React from "react";
import heroimg from '../../assets/img/hero.png'

const Hero = () => {
  return (
    <div className="container hero">
      <div className="row">
        <div className="left-hero col-12 col-sm-12 col-md-7">
          <div className="left-hero-text-con">
            <h1>Join us & Explore Thousands of Jobs</h1>
            <p>Find Jobs, Employment & Career Opportunities</p>
            <input type="text" />
            <p>Popular Searches : Designer, Developer, Web, IOS, PHP, Senior, Engineer,</p>
          </div>
        </div>
        <div className="right-hero col-12 col-sm-12 col-md-5">
            <img src={heroimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
