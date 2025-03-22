import React from "react";
import "./../styles.css";
import profile from "./../assets/profile.jpg";  // Add your profile image in /src/assets

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>HI, I'M ROHIT.</h2>
        <h3>A CREATIVE <span className="highlight">DEVELOPER</span> BASED IN INDIA</h3>
        <p>Building scalable web applications with modern technologies.</p>
        <div className="hero-buttons">
          <button className="black-btn">Got a project?</button>
          <button className="white-btn">Let's Mail</button>
        </div>
      </div>
      <img src={profile} alt="Rohit Jaiswal" className="hero-img" />
    </section>
  );
}

export default Hero;
