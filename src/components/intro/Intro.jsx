import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me.jpg";
import { AiOutlineCarryOut } from "react-icons/ai";
import { IoMdSchool } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";

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
              <IoMdSchool className="about__icon" />
              <h5>Education</h5>
              <small>Bachelor's Degree in IT</small>
              <br />
              <small>2019 - 2023</small>
              <br />
              <small>GPA: 3.56 / 4</small>
              <br />
              <small>Saudi Electronic University</small>
            </article>
            
            <article className="about__card">
              <a href="#portfolio" className="about__card-link">
                <VscFolderLibrary className="about__icon" />
                  <h5>Projects</h5>
                <small>16+ Completed Projects</small>
              </a>
            </article>

            
            <article className="about__card">
              <a href="#professional-experience" className="about__card-link">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
              </a>
            </article>
          </div>
          <p id="intro-paragraph">
            I am skilled in Front-End Web Development, IT Technical Support, IT Project Management, and UI/UX Design. 
            <br />
            <br />
            I have hands-on experience using ReactJS to create responsive and user-friendly websites and am adept at designing engaging websites and applications.
            <br />
            <br />
            My experience includes freelance work, an internship at IKK Group IT department, and various projects that collectively showcase my ability to design, develop, and deploy websites. My strong troubleshooting abilities and leadership skills enable me to effectively manage projects and contribute to team success.
            <br />
            <br />
            Currently looking for job opportunities in the field of IT, mainly focused on Web Development & Technical Support.
            <br />
            <br />
            <HiOutlineLocationMarker /> Jeddah, KSA
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
