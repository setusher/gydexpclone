import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              The issue tracking tool you'll enjoy using.
            </h1>
            <p className="hero-description">
              Linear helps streamline software projects, sprints, tasks and bug tracking. It's built for high-performance teams.
            </p>
            <button className="hero-cta">
              Start Your Free Trial →
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="video-container">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="hero-video"
            >
              <source src="/assets/20250805-2256-04.6639590.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
          </div>
        </div>
      </div>
      
      <div className="hero-divider"></div>
    </section>
  );
};

export default Hero;