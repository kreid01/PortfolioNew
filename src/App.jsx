import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Nav } from "./components/Nav";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { TwitterClone } from "./projects/TwitterClone";
import { LibraryMS } from "./projects/LibraryMS";
import { Records } from "./projects/Records";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Particles } from "react-particles";

function App() {
  const [projectOpen, setProjectOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState("");
  const handleProjectClick = (project) => {
    setProjectOpen((prevState) => !prevState);
    setCurrentProject(project);
    if (!projectOpen) {
      window.scroll({
        top: 0,
        left: 100,
        behavour: "instant",
      });
    }
  };

  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: [""],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 1, max: 8 },
      },
      fullscreen: {
        enable: true,
      },
      style: {
        position: "absolute",
      },
      links: {
        enable: true,
        distance: 150,
        color: "FFFFFF",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <div>
      {!projectOpen && (
        <div className="home">
          <section>
            <div>
              <Particles
                options={options}
                init={particlesInit}
                style={{ zindex: -1, position: "absolute" }}
              />
            </div>
            <div className="h-[100vh] w-[100vw] flex justify-center bg-gradient-to-t from-slate-700 to-gray-800 ">
              <div className="pt-[40vh] text-white z-10">
                <p>Hi my name is</p>
                <h2 className="mb-2 font-semibold  text-2xl md:text-4xl">
                  <span className="text-pink-400">Kieran Reid</span> |{" "}
                  <span className="">Software Engineer</span>
                </h2>
                <p className="w-[50vw] lg:w-[30vw] text-lg md:text-xl">
                  A passionate developer who loves solving problems and creating
                  software.
                </p>
                <div className=" mt-10 grid">
                  <button
                    onClick={() =>
                      window.scroll({
                        top: window.innerWidth < 1000 ? 920 : 950,
                        left: 100,
                        behavior: "smooth",
                      })
                    }
                    className="border-2 px-8 py-4 mx-auto hover:bg-red-500 hover:border-red-500 transition-all view-work"
                  >
                    View my work{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-3 transition-all arrow"
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>
          <Nav />
          <div className="w-[100vw] text-slate-800 relative z-8 bg-white">
            <About />
            <Projects handleProjectClick={handleProjectClick} />

            <section className="hidden">
              <h2 className="header">BLOG</h2>
            </section>
            <Contact />
            <Footer />
          </div>
        </div>
      )}
      {projectOpen && currentProject === "Twitter Clone" && (
        <TwitterClone handleProjectClick={handleProjectClick} />
      )}
      {projectOpen && currentProject === "Library MS" && (
        <LibraryMS handleProjectClick={handleProjectClick} />
      )}
      {projectOpen && currentProject === "Kierans' Records" && (
        <Records handleProjectClick={handleProjectClick} />
      )}
    </div>
  );
}

export default App;
