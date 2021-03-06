import React from "react";
import Particles from "react-particles-js";

function ParticleBG() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "out",
          },
        },
      }}
    />
  );
}

export default ParticleBG;
