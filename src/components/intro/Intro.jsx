import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me.jpg";
import { AiOutlineCarryOut } from "react-icons/ai";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Hani Darwisha" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>Bachelor's Degree in IT</small>
              <br />
              <small> 06/2023</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
            <article className="about__card">
              <AiOutlineCarryOut className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>
          </div>
          <p>
            I'm an IT fresh graduate, self-motivated, excited to work in an organization to apply my knowledge & skills in Front-End Web Development and IT Technical Support.
            <br />
            <br />
            My goal is to deliver efficient & effective solutions, and keep learning & being up-to-date with latest technologies in the IT field.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
