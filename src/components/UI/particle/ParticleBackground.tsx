import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticleBackground = (props: { color: string }) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (
    container: Container | undefined
  ): Promise<void> => {
    console.log(container);
    return Promise.resolve();
  };

  return (
    init && (
      <div className="particle-container z-10 ">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: { enable: true },
              },
              modes: {
                push: {
                  quantity: 8,
                },
                repulse: {
                  distance: 100,
                  duration: 0.2,
                },
              },
            },
            particles: {
              color: {
                value: props.color == "black" ? "#00539F" : "#1111",
              },
              links: {
                color: props.color == "black" ? "#00539F" : "#ffffff",
                distance: 100,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              //
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 250,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 0.2, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
};

export default ParticleBackground;
