import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';


// the following code is for the hover effect on the CV button where the icon will be highlighted when the mouse is over the button and will return to its original state when the mouse is out of the button
document.getElementById('CV-btn').addEventListener('mouseover', function() {
  document.querySelector('.experience__details-icon').style.filter = 'brightness(0) saturate(100%)';
});

document.getElementById('CV-btn').addEventListener('mouseout', function() {
  document.querySelector('.experience__details-icon').style.filter = '';
});


const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hani Darwisha</h1>
        <h4>IT Specialist</h4>
        <h5 className="text-light">Front-End Web Developer | IT Technical Support</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
