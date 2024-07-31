import "./contact.css";

import React from "react";
import { MdOutlineEmail, MdLocationCity } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

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
              <a href="mailto:hanidarwisha@gmail.com">
                <MdOutlineEmail className="contact__option-icon" />
              </a>
              <a href="tel:+966534062192">
                <FiPhone className="contact__option-icon" />
              </a>
            </div>
            <div className="contact__option-children">
              <a href="mailto:hanidarwisha@gmail.com">
                <h3>hanidarwisha@gmail.com</h3>
              </a>
              <a href="tel:+966534062192">
                <h3>966 53 406 2192</h3>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
