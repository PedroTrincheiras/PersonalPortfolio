import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import HamburgerMenu from "react-hamburger-menu";
import React, { useState} from "react";
import { motion} from "framer-motion";

function Header() {
  const [open, toggle] = useState(false);

  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <header>
        <div className="left">
          <a href="./">Pedro Trincheiras</a>
        </div>
        <div className="right">
          <a
            className="icon"
            href="https://github.com/PedroTrincheiras"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/pedrotrincheiras"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <HamburgerMenu
            className="hmenu"
            isOpen={open}
            menuClicked={() => toggle(!open)}
            width={30}
            height={30}
            strokeWidth={3}
            rotate={0}
            color="white"
            borderRadius={50}
            animationDuration={0.5}
          />
        </div>
      </header>
      <motion.spam
        className={open ? "dropmenu active" : "dropmenu"}
        variants={fade}
        transition={{ duration: 3 }}
      >
        <nav>
          <a
            className={open ? "active" : ""}
            href="#projects"
            onClick={() => toggle(!open)}
          >
            PROJECTS
          </a>
          <a
            className={open ? "active" : ""}
            href="#certifications"
            onClick={() => toggle(!open)}
          >
            CERTIFICATIONS
          </a>
          <a
            className={open ? "active" : ""}
            href="#skills"
            onClick={() => toggle(!open)}
          >
            SKILLS
          </a>
          <a
            className={open ? "active" : ""}
            href="#contacts"
            onClick={() => toggle(!open)}
          >
            CONTACTS
          </a>
        </nav>
      </motion.spam>
    </div>
  );
}

export default Header;
