import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import libraryHome from "../assets/Library/book_home.png";
import bookRegister from "../assets/Library/book_register.png";
import bookSignin from "../assets/Library/book_login.png";
import bookAdmin from "../assets/Library/book_admin2.png";
import bookCart from "../assets/Library/book_cart.png";

import { projects } from "./Projects";

export const LibraryMS = ({ handleProjectClick }) => {
  const skilksDisplayed = projects[1].techStack.map((skill) => {
    return (
      <div className="px-3 py-1 my-1 mx-1 bg-red-500 text-white">{skill}</div>
    );
  });
  return (
    <section className="height-[100vw] bg-gray-200">
      <header className="flex justify-center h-12 sticky top-0  border-b-4 border-red-500  bg-slate-700 mb-5">
        <button
          onClick={() => handleProjectClick("")}
          className="left-5 mt-[10px] absolute text-lg text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </header>
      <h1 className="my-auto header text-3xl text-slate-700 twitter">
        Library MS
      </h1>
      <div className="w-[70vw] mx-auto mt-20">
        <h2 className="underline my-2 text-lg">Project Purpose</h2>
        <p className="my-2">
          The purpose of this project was to create my own authorization and
          authentication using roles, within the backend. I also wanted to gain
          experience using a component library.
        </p>
        <img
          alt=""
          src={libraryHome}
          className="h-[67vh] mx-auto my-10 rounded-md shadow-md"
        />
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
        <div className="flex my-10">
          <img
            src={bookRegister}
            alt=""
            className="h-[58vh] mx-1 rounded-md shadow-md"
          />
          <img
            src={bookSignin}
            alt=""
            className="h-[58vh] mx-1 rounded-md shadow-md"
          />
        </div>
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
        <img
          src={bookAdmin}
          className="h-[65vh] mx-auto my-10 rounded-md shadow-md"
          alt=""
        />
        <p className="my-2">
          In the new book page, an admin can post a book to the database by
          filling out the new book form.{" "}
        </p>
        <p className="my-2">
          When users checkout and succesfully pay through paypal, the book then
          becomes unavaiable in the database and the current owner value is
          changed to the user who purchased or borrwed the book.
        </p>
        <div className="pb-20">
          <img
            src={bookCart}
            alt=""
            className="h-[65vh] mx-auto my-10 rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
