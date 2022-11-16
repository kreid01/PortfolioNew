import React from "react";
import recordHome from "../assets/Records/records_home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { projects } from "./Projects";
import recordSearch from "../assets/Records/records_search.png";
import reacordCart from "../assets/Records/records_cart.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Records = ({ handleProjectClick }) => {
  const skilksDisplayed = projects[1].techStack.map((skill) => {
    return (
      <div className="px-3 py-1 my-1 mx-1 bg-red-500 text-white">{skill}</div>
    );
  });

  return (
    <section className="height-[100vw] bg-gray-200 pb-20 ">
      <header className="flex justify-center h-12 sticky top-0  border-b-4 border-red-500 bg-slate-700 mb-5">
        <button
          onClick={() => handleProjectClick("")}
          className="left-5 mt-[10px] absolute text-lg text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <a
          href="https://github.com/kreid01/KieransRecordsFrontEnd"
          className="bg-slate-800 shadow-md px-1 py-2 ml-1  hover:bg-red-500 btn-two"
        >
          {" "}
          <FontAwesomeIcon icon={faGithub} className="h-6 mx-2 text-white" />
        </a>
      </header>
      <h1 className="my-auto header text-3xl  twitter">Kierans' Records</h1>
      <div className="w-[70vw] mx-auto mt-20 md:px-16 lg:px-32 xl:px-48">
        <h2 className="underline text-lg">Project Purpose</h2>
        <p className="my-2">
          The purpose of this project was to attempt to create a more complex
          programme, that forced me to learn some back-end programming. I also
          used the product to test my CSS, JavaScript and React skills.
        </p>
        <img
          className="my-10 md:h-[70vh] mx-auto rounded-md shadow-md  h-[40vh]"
          src={recordHome}
          alt=""
        ></img>

        <h2 className="underline text-lg">Web Stack</h2>
        <div className="flex flex-wrap my-10">{skilksDisplayed}</div>
        <p className="my-2">
          The project was built using React as it is a powerful language for
          creating fast and responsive single page aplications. The back-end was
          ran using an API that I created in C#'s .Net 6 Framework. I used .Net
          as it is a high performance language and it allowed me to easily
          create a responsive API to communicate to the database with.
        </p>
        <p className="my-2">
          The data base was created using mongoCompass and the data was
          populated and edited using CRUD within the front-end application.
        </p>
        <h2 className="underline text-lg">
          Problems and Difficulties Encountered
        </h2>
        <p className="my-2">
          Making the project form scratch forced me to understand management of
          multi-component programmes. I started using CSS, however later found
          it necessary to learn SCSS for the project, as it allowed me to manage
          the styles in a more organized and concise manner.{" "}
        </p>
        <p className="my-2">
          Throughout the creation of the project, the back-end management
          required the most attention and forced me to learn about API creation,
          and database manamgent.{" "}
        </p>
        <img
          src={reacordCart}
          alt=""
          className="md:h-[50vh] h-[30vh] mx-auto shadow-md rounded-md my-10"
        />
        <h2 className="underline text-lg">Function and Details of the Page</h2>
        <p className="my-2">
          The project consisted of a database of records that were mapped and
          displayed on the front-end with details on artist, price etc. The
          application has a section for the home page, total record list, the
          users collection of records, a new record page, cart which also
          contained a wishlist and a blog page for news on the latest records.
        </p>
        <p className="my-2">
          The total record list used pagination from the back-end to grab 20
          records at a time but if the user set a filter for genre or used the
          search bar, the page of 20 would change based on the input. The record
          list also container a sorting method, which could sort the records
          based on price, artist or record title.
        </p>
        <img
          src={recordSearch}
          alt=""
          className="my-10 rounded-md shadow-md h-[30vh] md:h-[50vh] lg:h-[60vh]"
        />

        <p className="my-2">
          The new record page gives the user the ability to input a record to
          the database as long as the validation criteria was met. The
          validation was done through J-Query, which made error messages easy to
          display and style. The new record page also contains a running preview
          of what the upload will look like.
        </p>

        <p className="my-2">
          The cart page contained a wishlist, a cart and a payment area. The
          payment would take the user to paypal, and if the payment went
          through, the database would be updated according to the order.
        </p>

        <p className="my-2">
          All records have a current record page, which allows the user to add
          the record to their cart, or wishlist. The wishlist data is stored in
          local storage. The current record page also contains a similar records
          section which display records with the same genres as the current
          record.
        </p>
      </div>
    </section>
  );
};
