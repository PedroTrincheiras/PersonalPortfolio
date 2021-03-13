import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faGithub,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Slider from "react-slick";

export default function ProjectCarousel({ projects }) {
  var settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
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
        breakpoint: 900,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  let projectCard = [];

  projects.projectsData.forEach((project) => {
    let tecnologies = [];
    let usefulLinks = [];

    if (project.tecnologies != null) {
      project.tecnologies.forEach((tec) => {
        switch (tec) {
          case "React":
            tecnologies.push(<FontAwesomeIcon icon={faReact} />);
            break;
          case "CSS":
            tecnologies.push(<FontAwesomeIcon icon={faCss3Alt} />);
            break;
          case "Flutter":
            tecnologies.push(<img src="/flutter.svg" alt="Flutter" />);
            break;
          case "Dart":
            tecnologies.push(<img src="/dart.svg" alt="Dart" />);
            break;
          case "FireBase":
            tecnologies.push(<img src="/firebase.svg" alt="FireBase" />);
            break;
          case "Express":
            tecnologies.push(<img src="/express.svg" alt="Express" />);
            break;
          case "Next":
            tecnologies.push(<img src="/nextjs.svg" alt="NextJS" />);
            break;
          default:
            break;
        }
      });
    }

    if (project.useful_links.git != null) {
      usefulLinks.push(
        <a href={project.useful_links.git} target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      );
    }

    if (project.useful_links.playStore != null) {
      usefulLinks.push(
        <a href={project.useful_links.playStore} target="_blank">
          <img src="/playstore.svg" alt="PlayStore" />
        </a>
      );
    }

    if (project.useful_links.ctfTime != null) {
      usefulLinks.push(
        <a href={project.useful_links.ctfTime} target="_blank">
          <img src="/ctftime.svg" alt="CTFTime" />
        </a>
      );
    }

    projectCard.push(
      <div className="project" key={project.id}>
        <div className="top">
          <h1>
            {project.name}
            <span>{"_"}</span>
          </h1>
          <p>
            {project.short_description}
            <span>{"."}</span>{" "}
          </p>
          <div className="tecnologies">{tecnologies}</div>
        </div>
        <div className="bottom">
          <div className="usefulLinks">{usefulLinks}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <Slider {...settings}>{projectCard}</Slider>
    </div>
  );
}
