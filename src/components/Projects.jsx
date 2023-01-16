import book from "../assets/Library/book.png";
import twitterThumbnail from "../assets/Twitter/twitter_thumbnail.png";
import record from "../assets/Records/records.png";
import taskThumbnail from "../assets/Tasker/thumbnail.png";
import cookThumbnail from "../assets/Homemade/cookThumbnail.jpeg";

import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const projects = [
  {
    title: "Twitter Clone",
    description:
      "A clone of the popular site twitter, allowing for users to sign up, post picures and follow and likes other users posts. Users can also message eachother and edit their profiles.",
    techStack: [
      "Typescript",
      "React",
      ".Net 6",
      "PostgreSQL",
      "SignalR",
      "Tailwind",
      "Jest",
    ],
    image: twitterThumbnail,
    mainTech: "React / Typescript / ASP .Net 6",
    frontGitLink: "https://github.com/kreid01/TwitterCloneFrontend",
    backGitLink: "https://github.com/kreid01/TwitterCloneBackend",
  },
  {
    title: "Library MS",
    description:
      "A site that functions as a both book store and a library, which allows user buy and borrow books. The site also includes an admin section, where stock and orders can be viewed",
    techStack: [
      "Typescript",
      "React",
      "Nextjs",
      "Redux",
      ".Net 6",
      "React Query",
      "Dapper",
      "SQLServer",
      "Tailwind",
      "Material UI Core",
    ],
    image: book,
    mainTech: "React / Typescript / ASP .Net 6",
    frontGitLink: "https://github.com/kreid01/LibraryFrontend",
    backGitLink: "https://github.com/kreid01/LibraryBackEnd",
  },
  {
    title: "Kierans' Records",
    description:
      "An e-commerce site for records where users can filter and search through the stock. Upon successful purchase, the stock in the database is updated.",
    techStack: [
      "Javascript",
      "React",
      ".Net 6",
      "MongoDB",
      "Bootstrap",
      "SASS",
      "Auth0",
    ],
    image: record,

    mainTech: "React / ASP .Net 6",
    frontGitLink: "https://github.com/kreid01/KieransRecordsFrontEnd",
    backGitLink: "https://github.com/kreid01/KieransRecordsBackEnd",
  },
  {
    title: "Task Manager",
    description:
      "An application to manage your groups, projects and tasks, to help you meet deadlines.",
    techStack: [
      "Typescript",
      "React",
      "NextJS",
      "Redux",
      "Apollo GraphQL",
      "Material UI Core",
      "Zod",
      "ExpressJS",
      "React Query",
      "TypegraphQL",
      "Tailwind",
      "Docker",
      "Gitlab",
    ],
    mainTech: "React / Typescript / GraphQL",
    frontGitLink: "https://github.com/kreid01/TaskManagement",
    image: taskThumbnail,
  },

  {
    title: "Homemade",
    description:
      "A mobile application that allows users to upload, store, share and manage their recipes.",
    techStack: [
      "Typescript",
      "React Native",
      "Redux",
      "Zod",
      "React Query",
      "NodeJS",
      "Reanimated",
      "Prisma",
      "ExpressJS",
      "React Query",
      "Tailwind",
      "Docker",
      "AWS EC2",
    ],
    mainTech: "React Native / Typescript / ExpressJS",
    frontGitLink: "https://github.com/kreid01/Cooker",
    image: cookThumbnail,
  },
  {
    title: "Rate Your Music",
    description:
      "A mobile application that allows users to upload, store, share and manage their recipes.",
    techStack: [
      "Typescript",
      "React Native",
      "Redux",
      "Zod",
      "Urql",
      "GraphQL",
      "Nexus",
      "Prisma",
      "Selenium",
      "Cypress",
      "Reanimated",
      "ExpressJS",
      "React Query",
      "Tailwind",
      "Docker",
      "Nginx",
      "Redis",
      "AWS RDS",
      "AWS ECS",
    ],
    isWip: true,
    mainTech: "React Native / Typescript / GraphQL",
    frontGitLink: "https://github.com/kreid01/RateYourMusicServer",
    image: "https://pbs.twimg.com/media/E_FoJFNVkAIWV1X.png",
  },
];

export const Projects = ({ handleProjectClick }) => {
  const projectsDisplayed = projects.map((project) => {
    return (
      <div id="projects" className="my-5 md:my-0">
        <div className="not-shown ">
          <div className="relative container ">
            <img
              effect="blur"
              className="w-[80vw] md:w-[40vw] xl:w-[400px] h-[300px] object-cover object-left  image"
              src={project.image}
              alt=""
            ></img>
            <div className="middle w-full mr-2">
              <h2 className="font-bold text-xl project-title">
                {project.title}
              </h2>
              <p className="text-pink-500 project-title">{project.mainTech}</p>
              <button
                disabled={project.isWip}
                onClick={() => handleProjectClick(project.title)}
                className="project-button  mt-10 bg-white px-4 py-2 border-2 border-pink-500"
              >
                {project.isWip ? "COMING SOON" : "LEARN MORE"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="mx-auto bg-gray-200 pt-4">
      <div>
        <h2 className="header">PROJECTS</h2>
        <div className=" mx-auto py-16 md:py-32 w-[80vw] grid md:grid-cols-2 xl:grid-cols-3 xl:w-[1200px]">
          {projectsDisplayed}
        </div>
      </div>
    </section>
  );
};

export default Projects;
