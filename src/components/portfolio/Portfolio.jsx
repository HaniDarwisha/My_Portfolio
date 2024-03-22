import "./portfolio.css";

import IMG1 from "../../assets/seniorProject.png";
import IMG2 from "../../assets/IKKgroup.png";
import IMG3 from "../../assets/YNWA-sport-store.jpg";
import IMG4 from "../../assets/artofmanagement-sa.png";
import IMG5 from "../../assets/menu.png";
import IMG6 from "../../assets/SimpleBanner.png";
import IMG7 from "../../assets/EsourceShelf.png";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    
    {
      id: 1,
      title: "QR Code-Based Authentication System for On-Campus E-Exam",
      img: IMG1,
      description:
        "Bachelor's Senior Project. A web-based system that computerizes the attendance taking process during exams period in addition to give access to exams using QR code, the system also has the ability to generate a unique password in case of failure in QR code scan. (Group of 4 members worked together on this project)",
      technologies: "React.JS | JvaScript | HTML | CSS",
      link: "https://seniorproject-invigilationsystem.onrender.com/",
      link_text: "Live Demo",
      link_icon: <BsArrowUpRight />,
    },
    {
      id: 2,
      title: "Website for IKK Group of Companies",
      img: IMG2,
      description:
        "A non-official website built for IKK Group of Companies during my COOP training program at their IT department.",
      technologies: "WordPress",
      link: "https://non-official-ikkgroup.netlify.app/",
      link_text: "Live Demo",
      link_icon: <BsArrowUpRight />,
    },
    {
      id: 4,
      title: "Website for Art of Management Est For Contracting",
      img: IMG4,
      description:
        "An Informative website for Art of Management Est For Contracting.",
      technologies: "WordPress | CSS",
      link: "https://artofmanagement-sa.netlify.app/",
      link_text: "Live Demo",
      link_icon: <BsArrowUpRight />,
    },
    {
      id: 3,
      title: "Landing Page for YNWA Sport store",
      img: IMG3,
      description:
        "A landing page website for YNWA Sport store.",
      technologies: "WordPress",
      link: "",
      link_text: "Live Demo",
      link_icon: <BsArrowUpRight />,
    },
    // {
    //   id: 5,
    //   title: "Digital Menu website for restaurants and coffee shops",
    //   img: IMG5,
    //   description:
    //     "U of U Health is the Mountain West's only academic health care system. We provide patient care, medical research, and physician training.",
    //   technologies: "React.JS | JavaScript | HTML | CSS",
    //   link: "https://menutestbench.onrender.com/",
    // link_Text: "Live Demo",
    // link_icon: <BsArrowUpRight />,
    // },
    {
      id: 7,
      title: "EsourceShelf",
      img: IMG7,
      description:
        "A digital library website, which was also intended to provide trustworthy sources of books and articles. This was a college project that was built as part of my Bachelor's Degree at Saudi Electronic University. (Group of 4 members worked together on this project)",
      technologies: "JavaScript | HTML | CSS",
      link: "",

    },
    {
      id: 6,
      title: "Simple Banner",
      img: IMG6,
      description:
        "Android Mobile Application. We made a demo system that would allow students to: Sign up, Login, Add, Remove, and Review their courses. This was a college project that was built as part of my Bachelor's Degree at Saudi Electronic University. (Group of 4 members worked together on this project)",
      technologies: "Java | XML",
      // link: "https://github.com/AbdulrahmanB0/SimpleBanner.git",
      link_text: "GitHub",
      link_icon: <BsArrowUpRight />,
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img id="portfolio_img" src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
              <br />
            </div>
            
            {pro.link && (
              <div className="portfolio__item-cta">
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  {pro.link_text}{pro.link_icon}
                </a>
              </div>
            )}

          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
