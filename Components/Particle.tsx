import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []); 

  const options = {
    background: { color: { value: "#0f172a" } }, 
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: false, mode: "push" },
        onHover: { enable: false, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.02,
        width: 1,
      },
      move: {
        enable: false,
        speed: 6,
        outModes: "bounce" as const, // Casting as const to satisfy TypeScript
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default Particle;
