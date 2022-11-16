import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

export const Footer = () => {
  return (
    <footer className=" bg-gradient-to-t from-slate-700 to-gray-800 ">
      <div>
        <button></button>
        <div className="flex justify-center py-10">
          <a
            href="https://www.linkedin.com/in/kieran-reid-0b3041172/"
            className="bg-slate-700 shadow-md px-1 py-2 mx-2 hover:bg-red-500 btn-two"
          >
            {" "}
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="h-7 mx-2 text-white"
            />
          </a>
          <a
            href="https://github.com/kreid01"
            className="bg-slate-700 shadow-md px-1 py-2 mx-2 hover:bg-red-500 btn-two"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub} className="h-7 mx-2 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};
