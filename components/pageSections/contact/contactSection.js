import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import Footer from "../../footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactSection() {
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
        Contacts<span>.</span>
      </motion.h1>
      <div className="body">
        <motion.div
          animate={controls}
          variants={fadeBottom}
          initial="hidden"
          transition={{ duration: 1 }}
          className="contacts"
        >
          <div className="top">
            <FontAwesomeIcon icon={faEnvelope} />
            <h2>pbtrincheiras@gmail.com</h2>
          </div>
          <div className="bottom">
            <a href="https://github.com/PedroTrincheiras" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/pedrotrincheiras"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </motion.div>
      </div>
      <Footer key="footer" />
    </div>
  );
}

export default ContactSection;
