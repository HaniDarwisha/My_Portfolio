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
import { ImPrinter } from "react-icons/im";
import { FaNetworkWired } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";



const Experience = () => {
  return (
    <section>
      <h5>My Work Experience</h5>
      <h2>Experience</h2>
    <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <BsBriefcaseFill name="briefcase-outline" role="img" class="md hydrated" aria-label="briefcase outline"></BsBriefcaseFill>
      </div>

    </div>

    <ol class="timeline-list">

      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">
          Freelancer Web Developer
        </h4>

        <span>July 2023 — Present</span>

        <p class="timeline-text">
          I'm available for freelance, short-term, and long-term
          projects.
        </p>
      </li>
      
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">COOP Training</h4>

        <span>June 2022 — August 2022</span>

        <p class="timeline-text">IKK Group Of Companies - Centralized IT Department, Jeddah (Full-time)</p>
      </li>


      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">Cashier</h4>

        <span>November 2019 — April 2020</span>

        <p class="timeline-text">LaFamiglia Bistro Café, Jeddah (Full-time)</p>
      </li>

     
    </ol>
  </section>
  </section>
  );
};

export default Experience;
