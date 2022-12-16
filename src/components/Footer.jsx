import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

export const Footer = () => {
  return (
    <footer className=" bg-gradient-to-t from-slate-700 to-gray-800 h-[15vh]">
      <div>
        <div className="flex justify-center py-10">
          <a
            href="https://www.linkedin.com/in/kieran-reid01"
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
          <a
            href="https://docs.google.com/document/d/1Z6t2Ppi0yVoYmM4ul9nu36dA8Z-1SW1N/edit?usp=sharing&ouid=114049244276491207017&rtpof=true&sd=true"
            className="bg-slate-700 shadow-md px-1 py-2 mx-2 hover:bg-red-500 btn-two"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faFile} className="h-7 mx-2 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;