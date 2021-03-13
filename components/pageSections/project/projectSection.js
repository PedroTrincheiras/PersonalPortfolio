import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import ProjectCarousel from "../project/projectCarousel";

function ProjectSection({projects}) {
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
        Projects<span>.</span>
      </motion.h1>
      <motion.div
        className="container"
        animate={controls}
        variants={fadeBottom}
        initial="hidden"
        transition={{ duration: 1 }}
      >
        <ProjectCarousel projects={projects}/>
      </motion.div>
    </div>
  );
}

export default ProjectSection;
