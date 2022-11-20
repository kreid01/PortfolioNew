import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import booksHome from "../assets/Library/book_home.png";
import bookSearch from "../assets/Library/book_search.png";
import bookSignin from "../assets/Library/book_login.png";
import bookAdmin from "../assets/Library/book_admin2.png";
import bookCart from "../assets/Library/book_cart.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { projects } from "../components/Projects";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const photos = [booksHome, bookCart, bookSignin, bookSearch, bookAdmin];

export const LibraryMS = ({ handleProjectClick }) => {
  const skilksDisplayed = projects[1].techStack.map((skill) => {
    return (
      <div className="px-3 py-1 my-1 mx-1 bg-red-500 text-white">{skill}</div>
    );
  });
  return (
    <section className="height-[100vw] bg-gray-200">
      <header className="flex justify-center h-12 sticky top-0 border-b-4 border-red-500  bg-slate-700 mb-5">
        <button
          onClick={() => handleProjectClick("")}
          className="left-5 mt-[10px] absolute text-lg text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <a
          href="https://github.com/kreid01/LibraryFrontend"
          className="bg-slate-800 shadow-md px-1 py-2 ml-1  hover:bg-red-500 btn-two"
        >
          {" "}
          <FontAwesomeIcon icon={faGithub} className="h-6 mx-2 text-white" />
        </a>
      </header>
      <h1 className="my-auto header text-3xl text-slate-700 twitter">
        Library MS
      </h1>
      <div className="w-[70vw] mx-auto mt-20 md:px-12 lg:px-32 xl:px-48">
        <h2 className="underline my-2 text-lg">Project Purpose</h2>
        <p className="my-2">
          The purpose of this project was to create my own authorization and
          authentication using roles, within the backend. I also wanted to gain
          experience using a component library.
        </p>

        <h2 className="underline my-2 text-lg">Web Stack</h2>
        <div className="flex flex-wrap my-10">{skilksDisplayed}</div>
        <p className="my-2">
          {" "}
          I chose to use Nextjs as it allows for a faster initial load time due
          to pages only being loaded upon being clicked on. I joined this with
          Redux to make state management easier for speicifc states such as the
          cart and the details of a logged in user.
        </p>
        <p>
          The user registration form and new book form both use Material UI
          Components and useForm, to make creating a functional easy and viually
          appealing. The forms also use Zod for validation. I chose Zod as the
          refinment feature in the schema allowed for password mathcing
          validation.
        </p>
        <p>
          React Query's useQuery and useMutation hook made communicating with
          the ASP. Net API easier, and allowed for the state of the call such as
          error or loading to easily accessed and used.
        </p>
        <div className="flex my-10"></div>
        <h2 className="underline my-2">Function and Details of the Page</h2>
        <p className="my-2">
          The application allows for users to browse book through searching nad
          filtering. If the user finds a book they want, they can either buy the
          book or borrow the book from the library.
        </p>
        <p className="my-2">
          The admin section of the application, allows for the admin to view all
          the users and orders within the database. The admin page also allows
          for viewing of all stock and who the current owner of the book is.
        </p>

        <p className="my-2">
          In the new book page, an admin can post a book to the database by
          filling out the new book form.{" "}
        </p>
        <p className="my-2">
          When users checkout and succesfully pay through paypal, the book then
          becomes unavaiable in the database and the current owner value is
          changed to the user who purchased or borrwed the book.
        </p>
        <div className="pb-20"></div>
      </div>
    </section>
  );
};
