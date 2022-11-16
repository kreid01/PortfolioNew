import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Nav } from "./components/Nav";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { TwitterClone } from "./components/TwitterClone";
import { LibraryMS } from "./components/LibraryMS";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".not-shown");
hiddenElements.forEach((el) => observer.observe(el));

function App() {
  const [projectOpen, setProjectOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState("");
  const handleProjectClick = (project) => {
    setProjectOpen((prevState) => !prevState);
    setCurrentProject(project);
    if (projectOpen) {
      window.scroll({
        top: 1600,
        left: 100,
        behavior: "smooth",
      });
    } else {
      window.scroll({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
    }
    console.log(projectOpen);
  };

  return (
    <div>
      {!projectOpen && (
        <>
          <section>
            <div className="h-[100vh] w-[100vw] flex justify-center bg-gradient-to-t from-slate-700 to-gray-800 ">
              <div className="pt-[40vh] text-white">
                <p>Hi my name is</p>
                <h2 className="mb-2 font-semibold text-4xl">
                  <span className="text-pink-400">Kieran Reid</span> |{" "}
                  <span className="">Software Engineer</span>
                </h2>
                <p className="w-[50vw] text-xl">
                  A passionate developer who loves solving problems and creating
                  software.
                </p>
                <div className="ml-[20vw] mt-10 ">
                  <button
                    onClick={() =>
                      window.scroll({
                        top: 920,
                        left: 100,
                        behavior: "smooth",
                      })
                    }
                    className="border-2 px-8 py-4 hover:bg-red-500 hover:border-red-500 transition-all view-work"
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
          <div className="w-[100vw] text-slate-800">
            <About />
            <Projects handleProjectClick={handleProjectClick} />

            <section>
              <h2 className="header">BLOG</h2>
            </section>
            <Contact />
            <Footer />
          </div>
        </>
      )}
      {projectOpen && currentProject === "Twitter Clone" && (
        <TwitterClone handleProjectClick={handleProjectClick} />
      )}
      {projectOpen && currentProject === "Library MS" && (
        <LibraryMS handleProjectClick={handleProjectClick} />
      )}
    </div>
  );
}

export default App;
