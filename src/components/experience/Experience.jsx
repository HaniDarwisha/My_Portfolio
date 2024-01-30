import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";
import { DiReact } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { CgScreenShot } from "react-icons/cg";
import { CgHomeScreen } from "react-icons/cg";
import { CgLaptop } from "react-icons/cg";
import { CgWindows } from "react-icons/cg";
import { CgUsb } from "react-icons/cg";
import { BsFolderSymlink } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { CgArrowUpO } from "react-icons/cg";
import { AiFillTool } from "react-icons/ai";
import { BiBrain } from "react-icons/bi";
import { CgPhone } from "react-icons/cg";
import { DiLinux } from "react-icons/di";
import { CgUser } from "react-icons/cg";
import { BsHeadset } from "react-icons/bs";
import { BiHdd } from "react-icons/bi";
import { FaMicrosoft } from "react-icons/fa";



const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>

      <div className="container experience__container">

     
        
        <div className="experience__frontend">
          <h3>Front-End Web Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <h4>ReactJS</h4>
            </article>
            <article className="experience__details">
              <DiHtml5 className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <DiJsBadge className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <DiWordpress className="experience__details-icon" />
              <h4>WordPress | CMS</h4>
            </article>
            <article className="experience__details">
              <DiGithubBadge className="experience__details-icon" />
              <h4>GitHub</h4>
            </article>
            <article className="experience__details">
              <CgScreenShot className="experience__details-icon" />
              <h4>Responsive Design</h4>
            </article>
            <article className="experience__details">
              <CgHomeScreen className="experience__details-icon" />
              <h4>UI/UX</h4>
            </article>
            <article className="experience__details">
              <BsGlobe className="experience__details-icon" />
              <h4>DNS Management</h4>
            </article>
            <article className="experience__details">
              <AiOutlineDashboard className="experience__details-icon" />
              <h4>Web Performance Optimization</h4>
            </article>
            <article className="experience__details">
              <CgArrowUpO className="experience__details-icon" />
              <h4>Web Hosting</h4>
            </article>
            <article className="experience__details">
              <AiFillSetting className="experience__details-icon" />
              <h4>Deployment</h4>
            </article>
          </div>
        </div>


        <div className="experience__frontend">
          <h3>IT Technical Support</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillTool className="experience__details-icon" />
              <h4>Troubleshooting</h4>
            </article>
            <article className="experience__details">
              <BiBrain className="experience__details-icon" />
              <h4>Problem Solving</h4>
            </article>
            <article className="experience__details">
              <CgUsb className="experience__details-icon" />
              <h4>Operating Systems Installation</h4>
            </article>
            <article className="experience__details">
              <CgLaptop className="experience__details-icon" />
              <h4>Computer Hardware Maintenance</h4>
            </article>
            <article className="experience__details">
              <BiHdd className="experience__details-icon" />
              <h4>Formatting storage devices</h4>
            </article>
            <article className="experience__details">
              <BsFolderSymlink className="experience__details-icon" />
              <h4>Transferring employees data</h4>
            </article>
            <article className="experience__details">
              <CgUser className="experience__details-icon" />
              <h4>ITIL v3</h4>
            </article>
            <article className="experience__details">
              <DiLinux className="experience__details-icon" />
              <h4>Linux</h4>
            </article>
            <article className="experience__details">
              <FaMicrosoft className="experience__details-icon" />
              <h4>Microsoft Office</h4>
            </article>
            <article className="experience__details">
              <BsHeadset className="experience__details-icon" />
              <h4>Customer Service</h4>
            </article>
          </div>
        </div>


        <div className="experience__frontend">
          <h3>Soft Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Leadership</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Teamwork</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Communication</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Conflict Management</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Research</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Brainstorming</h4>
            </article>
          </div>
        </div>


      </div>

    </section>
  );
};

export default Experience;
