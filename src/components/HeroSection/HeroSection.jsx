import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = ({ heading, paragraph }) => {
  return (
    <div className="hero-section">
      <div className="hc">
        <h1 className="hero-heading">{heading}</h1>
        <p className="hero-paragraph">{paragraph}</p>
        <Link className="cta-button" to="/contact">
          <span>Get Started</span>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;