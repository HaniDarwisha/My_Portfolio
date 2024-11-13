import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ImageSlider.css';

import IMG7 from "../../assets/NYWTK-most-creative-homework-uiux.jpg";
import IMG2 from "../../assets/NYWTK-certificate-of-completion-uiux.jpg";
import IMG5 from "../../assets/Cyber-Security.jpg";
import IMG6 from "../../assets/Cyber-security-awareness.jpg";
import IMG4 from "../../assets/Applied-data-statistics.jpg";
import IMG1 from "../../assets/BSc-Degree-IT-SEU.png";
import IMG3 from "../../assets/IOT-Certificate.jpg";
// import IMG8 from "../../assets/NYWTK-solo-project-certificate-uiux.jpg";
import IMG9 from "../../assets/App in one Day - Attendance Certificate.png";
import IMG10 from "../../assets/Web Ethical Hacking - Attendance Certificate.png";


const ImageSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size and update state
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const images = [
    {
      id: 1,
      src: IMG1,
      alt: 'Certification for Hani Darwisha',
    },
    {
      id: 2,
      src: IMG2,
      alt: 'Certification for Hani Darwisha',
    },
    {
      id: 3,
      src: IMG3,
      alt: 'Certification for Hani Darwisha',
    },
    {
      id: 4,
      src: IMG4,
      alt: 'Certification for Hani Darwisha',
    },
    {
      id: 5,
      src: IMG5,
      alt: 'Certification for Hani Darwisha',
    },
    {
      id: 6,
      src: IMG6,
      alt: 'Certification for Hani Darwisha',
    },
    {
      id: 7,
      src: IMG7,
      alt: 'Certification for Hani Darwisha',
    },
    {
      id: 9,
      src: IMG9,
      alt: 'Certification for Hani Darwisha',
    },
    {
      id: 10,
      src: IMG10,
      alt: 'Certification for Hani Darwisha',
    },
  ];

  return (
    <section id="image-slider">
      <h5>Professional Milestones</h5>
      <h2>Certifications</h2>
      <Swiper
        className="container image-slider__container"
        modules={[Pagination, isMobile ? null : Navigation]} // Conditionally add Navigation module
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={!isMobile} // Disable navigation (arrows) on mobile
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="image-slide">
            <img src={image.src} alt={image.alt} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSlider;
