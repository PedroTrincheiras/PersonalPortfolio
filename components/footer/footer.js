import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Footer() {
  var d = new Date().getFullYear();
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
    <motion.footer
      ref={ref}
      animate={controls}
      variants={fadeBottom}
      initial="hidden"
      transition={{ duration: 1 }}
    >
      <p>
        Made with <span>❤️</span> by Pedro Trincheiras.
      </p>
      <small>
        Copyright &copy; {d}, Pedro Trincheiras. All rights reserved.
      </small>
    </motion.footer>
  );
}

export default Footer;
