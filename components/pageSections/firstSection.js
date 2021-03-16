import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

function FirstSection() {
  const fadeLeft = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, x: [-200, 10, 0] },
  };

  const fadeRight = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, x: [200, -10, 0] },
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
      >
        Hello<span>.</span> I'm Pedro<span>.</span>
      </motion.h1>

      <motion.h2
        animate={controls}
        variants={fadeRight}
        initial="hidden"
        transition={{ duration: 1 }}
      >
        I'm a Computer Engineering Student<span>.</span>
      </motion.h2>
      <motion.p
        className="info"
        animate={controls}
        variants={fadeBottom}
        initial="hidden"
        transition={{ duration: 1.5 }}
      >
        Scroll Down
        <motion.spam
          animate={{ y: 3 }}
          transition={{ duration: 0.5, yoyo: Infinity }}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.spam>
      </motion.p>
    </div>
  );
}

export default FirstSection;
