import React from 'react';
import './Imagetextsection.css';

const Imagetextsection = ({ image, heading, paragraph }) => {
  return (
    <div className="image-text-section">
      <div className="image-container">
        <img src={image} alt="Section Image" />
      </div>
      <div className="text-container">
        <h2 className="section-heading">{heading}</h2>
        <p className="section-paragraph">{paragraph}</p>
      </div>
    </div>
  );
};

export default Imagetextsection;