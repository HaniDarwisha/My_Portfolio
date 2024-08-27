import React from 'react';
import CV from '../../assets/Hani Darwisha - CV.pdf';

const CTA = () => {
  return (
    <div className="cta">
      {/* if you want the CV file to be directly downloaded, write "download" between href and className. Like this:  <a href={CV} download className="btn"> */}
      <a href={CV} target="_blank" rel="noopener noreferrer" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
