import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { projects } from "../components/Projects";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import taskerHome from "../assets/Tasker/Home.png";
import taskerProject from "../assets/Tasker/project.png";
import taskerCreate from "../assets/Tasker/create.png";
import taskerThumb from "../assets/Tasker/thumbnail.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { settings } from "../components/SlickArrow";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Tasker = ({ handleProjectClick }) => {
  const skilksDisplayed = projects[3].techStack.map((skill) => {
    return (
      <div className="px-3 py-1 my-1 mx-1 bg-red-500 text-white">{skill}</div>
    );
  });

  const photos = [taskerHome, taskerProject, taskerThumb, taskerCreate];

  return (
    <section className="height-[100vw] bg-white pb-20">
      <header className="flex justify-center h-12 sticky top-0 z-30 border-b-4 border-red-500 bg-slate-700 mb-5">
        <a
          href="#projects"
          onClick={() => handleProjectClick("")}
          className="left-5 mt-[10px] absolute text-lg text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
        <a
          href="https://github.com/kreid01/TaskManagerServer"
          className="bg-slate-800 shadow-md px-1 py-2 ml-1  hover:bg-red-500 btn-two"
        >
          {" "}
          <FontAwesomeIcon icon={faGithub} className="h-6 mx-2 text-white" />
        </a>
      </header>
      <h2
        className={`my-auto header text-3xl  twitter ${
          window.innerWidth > 1000 ? "not-shown-project" : ""
        }`}
      >
        Tasker
      </h2>
      <div
        className={`w-[70vw] mx-auto mt-20 md:px-16 lg:px-32 xl:px-48" ${
          window.innerWidth > 1000 ? "not-shown-project" : ""
        }`}
      >
        <h2 className="underline text-lg">Project Purpose</h2>
        <p className="my-2">
          The purpose of this project was to develop skils using GraphQL and
          further understand authentication methods.
        </p>
        <div className="md:hidden xl:block">
          <Slider {...settings} className="my-10 xl:w-[58vw]  mx-auto">
            {photos.map((photo) => {
              return (
                <LazyLoadImage
                  src={photo}
                  placeholderSrc={photo}
                  effect="blur"
                  alt=""
                  className="h-[30vh] xl:h-[72vh] object-cover md:object-scale-down"
                />
              );
            })}
          </Slider>
        </div>
        <h2 className="underline text-lg">Web Stack</h2>
        <div className="flex flex-wrap my-10">{skilksDisplayed}</div>
        <p className="my-2">
          The project was built using React, GraphQL, Typescript and TypegraphQL
          which if used all together create a very useful type deifnition
          experience.
        </p>
        <p className="my-2">
          The database server was was stored on MySQL database created within a
          docker container.
        </p>
        <h2 className="underline text-lg">
          Problems and Difficulties Encountered
        </h2>
        <p className="my-2">
          Being the first project that I have created using GraphQL, I
          encountered issues with creating an Apollo Server that could generate
          and store cookies within the browser for the authentication of the
          user.{" "}
        </p>
        <h2 className="underline text-lg my-2">What I Learned</h2>
        <p>
          I learned how to utilise GraphQL and TypegraphQL within a React
          application using codegen and react hooks. This made querying,
          mutations and refetching from the GraphQL server easy. I also learned
          how to implement authentication with a GraphQL server. Implementing
          authentication furthered my understanding of security and how access
          tokens should be stored in cookies as opposed to local storage due to
          security issues.
        </p>
        <p>
          This was my first project that utilised docker and CICD pipelines to
          allow for updates and deployment to happen seamlessly. This allowed to
          understand the purpose and benefits that both CICD and docker bring to
          the developement life cycle.
        </p>

        <h2 className="underline text-lg my-2">
          Function and Details of the Page
        </h2>
        <p className="my-2">
          The application allows users to create temas, projects and tasks that
          can all be managed within the app. The user can check off tasks once
          they are complete which are then stored in completed tasks.
        </p>
        <p className="my-2">
          The home view allows for the user to see their most recent teams,
          tasks and projects and allows to understand what is necessary to be
          completed to meet the project deadlines.
        </p>
        <p>
          If the user that is logged in, is the creator of the project, team or
          task then they are able to delete the project, team or task.
        </p>
      </div>
    </section>
  );
};

export default Tasker;
