import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import twitterHome from "../assets/Twitter/twitter_home.png";
import twitterSignin from "../assets/Twitter/twitter_sign.png";
import twitterProfile from "../assets/Twitter/twitter_profile.png";
import twitterMessaging from "../assets/Twitter/twttter_messagin.png";

import { projects } from "./Projects";

export const TwitterClone = ({ handleProjectClick }) => {
  const skilksDisplayed = projects[0].techStack.map((skill) => {
    return (
      <div className="px-3 py-1 my-1 mx-1 bg-red-500 text-white">{skill}</div>
    );
  });

  return (
    <section className="height-[100vw] bg-gray-200 ">
      <header className="flex justify-center h-12 sticky top-0  border-b-4 border-red-500 bg-slate-700 mb-5">
        <button
          onClick={() => handleProjectClick("")}
          className="left-5 mt-[10px] absolute text-lg text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </header>
      <h1 className="my-auto header text-3xl  twitter">Twitter Clone</h1>
      <div className="w-[70vw] mx-auto mt-20">
        <h2 className="underline my-2 text-lg">Project Purpose</h2>
        <p className="my-2">
          The purpose of this project was to test my abilities and expand my
          knowledge on programming. Creating a functional messaging application
          where users can talk in real time was the primary goal.
        </p>
        <img
          src={twitterHome}
          alt=""
          className="h-[67vh] mx-auto my-10 rounded-md shadow-md"
        />
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
        <h2 className="underline my-2 text-lg">
          Function and Details of the Page
        </h2>
        <p className="my-2">
          Users are able to create an account and post photos or text to their
          timeline which show on their profile page. The user can edit their
          profile, updating their profile picture and cover photo of their page.{" "}
        </p>
        <img
          src={twitterSignin}
          alt=" "
          className="my-10 h-[60vh] mx-auto rounded-md shadow-md"
        />
        <p className="my-2">
          All posts can be liked, commented or retweeted and if any interaction
          is carried out, the post shows up on the users timeline. Users can
          also message eachother in real time. On the messaing section of the
          application, a user can view all their message history through the use
          of an infinite scroll feature which was implemented using React Query.
        </p>
        <img
          src={twitterMessaging}
          alt=""
          className="my-10 h-[60vh] mx-auto rounded-md shadow-md"
        ></img>
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
        <div className="pb-20">
          <img
            src={twitterProfile}
            alt=""
            className="h-[70vh] rounded-md shadow-md mx-auto my-10"
          />
        </div>
      </div>
    </section>
  );
};