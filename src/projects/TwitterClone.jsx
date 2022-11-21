import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import twitterHome from "../assets/Twitter/twitter_home.png";
import twitterSignin from "../assets/Twitter/twitter_sign.png";
import twitterProfile from "../assets/Twitter/twitter_profile.png";
import twitterMessaging from "../assets/Twitter/twttter_messagin.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { projects } from "../components/Projects";

import { settings } from "../components/SlickArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TwitterClone = ({ handleProjectClick }) => {
  const skilksDisplayed = projects[0].techStack.map((skill) => {
    return (
      <div className="px-3 py-1 my-1 mx-1 bg-red-500 text-white">{skill}</div>
    );
  });

  const photos = [twitterHome, twitterSignin, twitterProfile, twitterMessaging];

  return (
    <section className="height-[100vw] bg-gray-100">
      <header className="flex z-10 justify-center h-12 sticky top-0  border-b-4 border-red-500 bg-slate-700 mb-5">
        <a
          href="#projects"
          onClick={() => handleProjectClick("")}
          className="left-5 mt-[10px] absolute text-lg text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
        <a
          href="https://github.com/kreid01/TwitterCloneFrontend"
          className="bg-slate-800 shadow-md px-1 py-2 ml-1  hover:bg-red-500 btn-two"
        >
          {" "}
          <FontAwesomeIcon icon={faGithub} className="h-6 mx-2 text-white" />
        </a>
      </header>
      <h1
        className={`my-auto header text-3xl  twitter ${
          window.innerWidth > 1000 ? "not-shown-project" : ""
        }`}
      >
        Twitter Clone
      </h1>
      <div
        className={`w-[70vw] mx-auto mt-20 md:px-12 lg:px-32 xl:px-48 ${
          window.innerWidth > 1000 ? "not-shown-project" : ""
        }`}
      >
        <h2 className="underline my-2 text-lg">Project Purpose</h2>
        <p className="my-2">
          The purpose of this project was to test my abilities and expand my
          knowledge on programming. Creating a functional messaging application
          where users can talk in real time was the primary goal.
        </p>
        <div className="md:hidden xl:block">
          <Slider {...settings} className="my-10">
            {photos.map((photo) => {
              return (
                <img
                  src={photo}
                  alt=""
                  className="lg:h-[70vh] object-scale-down"
                />
              );
            })}
          </Slider>
        </div>
        <h2 className="underline my-2 text-lg">Web Stack</h2>
        <div className="flex flex-wrap my-10">{skilksDisplayed}</div>
        <p className="my-2">
          I used React as its a powerful language which allows for the ability
          to create and re-use components with ease. This makes the app more
          maintanable and less bug prone. I chose to you Typescript as its type
          checking allows for less run time errors due to type issues being
          recognizable immediately.
        </p>
        <p className="my-2">
          I used ASP .Net 6 as my back-end as it is a powerfurful language which
          allowed me to easily create methods to exchange data between the front
          and back end of the application. The use of .Net 6 also allowed for me
          to implement SignalR for the messaing functionaliy of the application.
        </p>
        <h2 className="my-2 text-lg underline">
          Problems and Difficulties Encountered
        </h2>
        <div>
          <p className="my-2">
            The primary issues that occurred during developement were the real
            time exchanges of data that both updated the database and what the
            user could see on the screen. The method I used to resolve this was
            changing state aswell as updating the database using API calls.
          </p>
        </div>
        <p className="my-2">
          Storing users within local storage caused issues, as the users
          information needed to be updated everytime they interacted with the
          page. This was solved using React Context which stored the users data
          in context. On change of the users data, the context would be updated
          using an API call.
        </p>
        <h2 className="underline my-2 text-lg">What I Learned</h2>
        <p>
          This project started my leanring of typescript and how useful the type
          system can be during coding. I also discovered more methods of
          creating resuable code and components within my program.
          <p>
            This was also my first project that included automated tests using
            jest.
          </p>
        </p>
        <h2 className="underline my-2 text-lg">
          Function and Details of the Page
        </h2>
        <p className="my-2">
          Users are able to create an account and post photos or text to their
          timeline which show on their profile page. The user can edit their
          profile, updating their profile picture and cover photo of their page.{" "}
        </p>
        <p className="my-2">
          All posts can be liked, commented or retweeted and if any interaction
          is carried out, the post shows up on the users timeline. Users can
          also message eachother in real time. On the messaing section of the
          application, a user can view all their message history through the use
          of an infinite scroll feature which was implemented using React Query.
        </p>

        <p className="my-2">
          Infinite scrolls were also implemented for the post timeline where
          users can scroll through their feed, seeing all their followers posts
          and their own. Finding other users posts or prolfiles is also possible
          using the search feature.
          <p className="my-2">
            If a user is given admin permissions, they are able to delete other
            users posts and comments.
          </p>
        </p>
        <div className="pb-20"></div>
      </div>
    </section>
  );
};
