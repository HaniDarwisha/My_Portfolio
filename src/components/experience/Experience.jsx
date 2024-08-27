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
        <span class="h4 timeline-item-title">
          Web Developer & Digital Consultant (Freelance)
        </span>

        <h4>Art of Management Est For Contracting, Jeddah, Saudi Arabia. 11/2023 — 01/2024
        </h4>

        <p class="timeline-text">
          <ul>
            <li>• Designed, developed, and deployed a fully functional website, managing all aspects from domain registration to hosting setup.</li>
            <li>• Created business emails, set up social media profiles, and linked all online presences on a linktree.</li>
            <li>• Designed a variety of graphic materials, including logos, business cards, flyers, and social media.</li>
            <li>• Managed marketing campaigns across multiple platforms (Tiktok, Snapchat, Facebook, Instagram), analyzing and reporting daily statistics.</li>
          </ul>
        </p>
      </li>
      
      <li class="timeline-item">
        <span class="h4 timeline-item-title">
          Technical Support & Web Development Intern (Cooperative Training Program)</span>

        <h4>IKK Group of Companies - Centralized IT Department. Jeddah, Saudi Arabia. 06/2022 — 08/2022</h4>

        <p class="timeline-text">
          <ul>
            <li>• Designed, developed, and deployed a fully functional website, managing all aspects from domain registration to hosting setup.</li>
            <li>• Helped the web development team with functional testing of the official IKK Group website.</li>
            <li>• Provided IT technical support similar to that of a regional officer, resolving technical issues both remotely via TeamViewer and on-site, including troubleshooting computers and assisting employees face-to-face.</li>
            <li>• Assisted the IT Support team across multiple locations, ensuring smooth IT operations.</li>
            <li>• Replaced computer hardware parts & installed software applications on employees computers.</li>
          </ul>
        </p>
      </li>

      <li class="timeline-item">
        <span class="h4 timeline-item-title">
          Cashier</span>

        <h4> LaFamiglia Bistro Cafe. Jeddah, Saudi Arabia. 11/2019 — 04/2020</h4>

        <p class="timeline-text">
          <ul>
            <li>• Delivered excellent customer service and managed inventory, ensuring operational efficiency.</li>
          </ul>
        </p>
      </li>

     
    </ol>
  </section>
  </section>
  );
};

export default Experience;
