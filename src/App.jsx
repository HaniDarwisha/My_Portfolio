import React from "react";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/skills";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Experience from "./components/experience/Experience";

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Contact />
      <Intro />
      <Experience />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
