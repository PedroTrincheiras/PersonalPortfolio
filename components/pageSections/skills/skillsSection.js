import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faGithub,
  faCss3Alt,
  faJava,
  faJs,
  faPython,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

function SkillsSection({ projects }) {
  let certificateCard = [];

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
        <span className="bar" />
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
        Skills<span>.</span>
      </motion.h1>
      <div className="body">
        <motion.div
          className="skills"
          animate={controls}
          variants={fadeBottom}
          initial="hidden"
          transition={{ duration: 1 }}
        >
          <div className="skill">
            <FontAwesomeIcon icon={faJava} />
            <h2>Java</h2>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faPython} />
            <h2>Python</h2>
          </div>
          <div className="skill">
            <img src="/flutter.svg" alt="Flutter" />
            <h2>Flutter</h2>
          </div>
          <div className="skill">
            <img src="/dart.svg" alt="Dart" />
            <h2>Dart</h2>
          </div>
          <div className="skill">
            <img src="/firebase.svg" alt="FireBase" />
            <h2>FireBase</h2>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faJs} />
            <h2>JavaScript</h2>
          </div>
          <div className="skill">
            <img src="/nextjs.svg" alt="NextJS" />
            <h2>NextJS</h2>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faReact} />
            <h2>React</h2>
          </div>
          <div className="skill">
            <img src="/express.svg" alt="ExpressJS" />
            <h2>ExpressJS</h2>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faHtml5} />
            <h2>HTML</h2>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCss3Alt} />
            <h2>CSS</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SkillsSection;
