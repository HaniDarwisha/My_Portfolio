import "./portfolio.css";

// import vid1 from "../../assets/TEACHERWITHATOUCHDEMO.mp4";
import IMG1 from "../../assets/HealthyMeal-UIUX.png";
import IMG2 from "../../assets/teacherwithatouch.jpg";
import IMG3 from "../../assets/YNWA-sport-store.jpg";
import IMG4 from "../../assets/artofmanagement-sa.png";
import IMG5 from "../../assets/menu.png";
import IMG6 from "../../assets/SimpleBanner.png";
import IMG7 from "../../assets/EsourceShelf.png";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

//Portfolio function
const Portfoliouiux = () => {
  const soloProjects = [
    
    {
      id: 1,
      title: "Healthy Meals App",
      img: IMG1,
      description:
        "UI/UX DESIGN for A healthy recipes app that displays healthy food recipes, snacks, main meals, and desserts. Users can browse recipes, choose the appropriate meal, and share recipes with friends.",
      technologies: "Figma",
      link: `#prototype-title-${1}`,
      link_text: "Live Prototype",
      link_icon: <BsArrowUpRight />,
    },
    {
      id: 2,
      title: "Teacher with a Touch App",
      img: IMG2,
      description:
        "UI/UX DESIGN for An educational app that connects students with teachers. Students can search for teachers, view their profiles, and book lessons with them. (Group of 4 members worked together on this project)",
      technologies: "Figma | FigJam | Canva | Trello",
      link: `#prototype-title-${2}`,
      link_text: "Live Prototype",
      link_icon: <BsArrowUpRight />,
    }
  ];

  return (
    <section id="portfolio">
      <h5>Portfolio of my work in</h5>
      <h2>UI/UX Design</h2>

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
                  className="btn btn-primary"
                >
                  {pro.link_text}{pro.link_icon}
                </a>
              </div>
            )}

          </article>
        ))}
      </div>
      {/* <video src={vid1} controls height={500} ></video> */}
    </section>
  );
};

export default Portfoliouiux;
