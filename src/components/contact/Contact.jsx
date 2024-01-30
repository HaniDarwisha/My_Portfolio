import "./contact.css";

import React from "react";
import { MdOutlineEmail, MdLocationCity } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      {/* <h5>
        I do receive your messages and will respond asap :)
      </h5> */}
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdLocationCity className="contact__option-icon" />
            </div>
            <div className="contact__option-children">
              <h4>hanidarwisha@gmail.com</h4>
              <h4>+966 53 406 2192</h4>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
