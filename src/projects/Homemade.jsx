import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import cookThumbnail from "../assets/Homemade/cookThumbnail.jpeg";
import cookHome from "../assets/Homemade/cookHome.jpeg";
import cookCalendar from "../assets/Homemade/cookCalendar.jpeg";
import cookSearch from "../assets/Homemade/cookSearch.jpeg";
import cookSign from "../assets/Homemade/cookSign.jpeg";
import cookAdd from "../assets/Homemade/cookAdd.jpeg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { settings } from "../components/SlickArrow";
import { projects } from "../components/Projects";

import "react-lazy-load-image-component/src/effects/blur.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos = [
  [cookHome, cookAdd, cookSearch],
  [cookThumbnail, cookCalendar, cookSign],
];

export const Homemade = ({ handleProjectClick }) => {
  const skilksDisplayed = projects[4].techStack.map((skill) => {
    return (
      <div className="px-3 py-1 my-1 mx-1 bg-red-500 text-white">{skill}</div>
    );
  });
  return (
    <section className="height-[100vw] bg-white">
      <header className="flex justify-center h-12 sticky top-0 border-b-4 z-30 border-red-500  bg-slate-700 mb-5">
        <a
          href="#projects"
          onClick={() => handleProjectClick("")}
          className="left-5 mt-[10px] absolute text-lg text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
        <a
          href="https://github.com/kreid01/CookerServer"
          className="bg-slate-800 shadow-md px-1 py-2 ml-1  hover:bg-red-500 btn-two"
        >
          {" "}
          <FontAwesomeIcon icon={faGithub} className="h-6 mx-2 text-white" />
        </a>
      </header>
      <h1
        className={`my-auto header text-3xl text-slate-700 twitter ${
          window.innerWidth > 1000 ? "not-shown-project" : ""
        }`}
      >
        Homemade
      </h1>
      <div
        className={`w-[70vw] mx-auto mt-20 md:px-12 lg:px-32 xl:px-48  ${
          window.innerWidth > 1000 ? "not-shown-project" : ""
        }`}
      >
        <h2 className="underline my-2 text-lg">Project Purpose</h2>
        <p className="my-2">
          The purpose of this project was to learn about mobile application
          creation and utilising animation APIs.
        </p>
        <div className=" hidden slider-cook">
          <Slider {...settings} className="my-10 mx-auto">
            {photos.map((photo) => {
              return (
                <>
                  {" "}
                  <LazyLoadImage
                    src={photo[0]}
                    placeholderSrc={photo[0]}
                    effect="blur"
                    alt=""
                    className="h-[50vh] xl:h-[70vh] object-cover md:object-scale-down"
                  />
                  ;
                  <LazyLoadImage
                    src={photo[1]}
                    placeholderSrc={photo[1]}
                    effect="blur"
                    alt=""
                    className="h-[50vh] xl:h-[70vh] object-cover md:object-scale-down"
                  />
                  <LazyLoadImage
                    src={photo[2]}
                    placeholderSrc={photo[2]}
                    effect="blur"
                    alt=""
                    className="h-[50vh] xl:h-[70vh] object-cover md:object-scale-down"
                  />
                </>
              );
            })}
          </Slider>
        </div>
        <h2 className="underline my-2 text-lg">Web Stack</h2>
        <div className="flex flex-wrap my-10">{skilksDisplayed}</div>
        <p className="my-2">
          {" "}
          I chose to use React Native due to my experience using React and its
          vast amounts of libraries.
        </p>
        <p className="my-2">
          The forms used within the app all use zod, native base and formik, as
          this combination makes it easy to create forms with validation.
        </p>
        <p>
          React Query's useQuery and useMutation made exhchaning data with the
          Secure Storage API and the ExpressJS server easier to maange and catch
          errors. Use of React Query also allowed for an infinite scroll to be
          implemented with ease.
        </p>
        <h2 className="underline my-2 text-lg">What I Learned</h2>
        <p>
          Throughout the design and creation of the application I learned about
          creating mobile applicaitons and how performance and animations have
          to be considered much more to create a nice user experience.
        </p>
        <h2 className="underline my-2 text-lg">
          Function and Details of the Page
        </h2>
        <p className="my-2">
          The application allows for users to upload, share and manage recipes.
          The users can favorite a recipe to store it on their liked recipes
          tab.
        </p>
        <p className="my-2">
          The calendar section allows users to randomize 7 of their liked
          recipes to help them decide their meal choices for the week
        </p>
        <p className="my-2">
          In the new recipe page, an admin can post a recipe to the database by
          filling out the form. The forms ingredients and recipes uses text
          recognition and regex to allows users to take pictures of their recipe
          books.{" "}
        </p>
        <div className="pb-20"></div>
      </div>
    </section>
  );
};

export default Homemade;
