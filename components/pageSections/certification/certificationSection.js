import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import Slider from "react-slick";

function CertificationSection({ projects }) {
  let certificateCard = [];

  var settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  projects.certificatesData.forEach((certificate) => {
    certificateCard.push(
      <div className="certificate" key={certificate.id}>
        <div className="text">
          <h1>
            {certificate.name}
            <span>{"_"}</span>
          </h1>
          <p>
            {certificate.entity}, insued {certificate.insued}
          </p>
          
        </div>
        <span className="bar"></span>
      </div>
    );
  });

  const fadeLeft = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, x: [-200, 10, 0] },
  };
  const fadeBottom = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: [1000, -0, 0] },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="section">
      <motion.h1
        ref={ref}
        animate={controls}
        variants={fadeLeft}
        initial="hidden"
        transition={{ duration: 1 }}
        className="title"
      >
        Certifications<span>.</span>
      </motion.h1>
        <motion.div
          animate={controls}
          variants={fadeBottom}
          initial="hidden"
          transition={{ duration: 1 }}
          className="certificates"
        >
          <Slider {...settings}>{certificateCard}</Slider>
          
        </motion.div>
      </div>

  );
}

export default CertificationSection;
