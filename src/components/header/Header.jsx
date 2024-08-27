import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';


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
