import React from 'react';
import CV from '../../assets/Hani Darwisha - CV.pdf';
// import a link icon from react-icons
import { AiOutlineLink } from "react-icons/ai";
import ButtonThingy from '../mini-components/buttonThingy';

const CTA = () => {
  return (
    <div className="cta">
      {/* if you want the CV file to be directly downloaded, write "download" between href and className. Like this:  <a href={CV} download className="btn"> */}
      {/* <a href={CV} target="_blank" rel="noopener noreferrer" className="btn" id="CV-btn">
        <AiOutlineLink className="experience__details-icon" />
        Download CV
      </a> */}

      <ButtonThingy />
      <a href="#contact" className="btn">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
