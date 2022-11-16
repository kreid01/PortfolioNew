import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import book from "../assets/Library/book.png";
import twitterThumbnail from "../assets/Twitter/twitter_thumbnail.png";
import record from "../assets/Records/records.png";

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
    frontGitLink: "https://github.com/kreid01/TwitterCloneFrontend",
    backGitLink: "https://github.com/kreid01/TwitterCloneBackend",
  },
  {
    title: "Library MS",
    description:
      "A site that functions as a both book store and a library, which allows users to both buy and borrow books. The site also includes an admin section, where stock and orders can be viewed",
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
      "Zod",
    ],
    image: book,
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
    frontGitLink: "https://github.com/kreid01/KieransRecordsFrontEnd",
    backGitLink: "https://github.com/kreid01/KieransRecordsBackEnd",
  },
  {
    title: "CRM Application",
    description: "A application to manage interactions between customers",
    techStack: [
      "Typescript",
      "React",
      "Nextjs",
      "Redux",
      "Apollo GraphQL",
      "Material UI Core",
      "Zod",
      "expressJS",
      "Prism",
      "Tailwind",
      "Jest",
    ],
    image: book,
    isWip: true,
  },
];

export const Projects = ({ handleProjectClick }) => {
  const projectsDisplayed = projects.map((project) => {
    const techStackMap = project.techStack.map((skill) => {
      return (
        <div className="px-3 py-1 my-1 mx-1 bg-red-500 text-white">{skill}</div>
      );
    });

    return (
      <div className="md:px-6 lg:px-32 xl:px-64 not-shown border-b-[1px] border-red-500 pb-10 md:border-0 md:pb-0">
        <div className="grid md:grid-cols-2 my-10 mx-auto  w-[85vw]  lg:w-[70vw] xl:w-[60vw]  ">
          <div className="mr-8">
            <div className="flex justify-between">
              <h1 className="font-semibold text-2xl">{project.title}</h1>
              <a
                href={project.frontGitLink}
                className="bg-slate-700 shadow-md px-1 py-2 ml-1 -mt-1 mb-1 hover:bg-red-500 btn-two"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-6 mx-2 text-white"
                />
              </a>
            </div>
            <p>{project.description}</p>
            <div className="flex flex-wrap my-3">{techStackMap}</div>
          </div>
          {!project.isWip ? (
            <div className="relative container">
              <img
                className="w-[100%] md:h-[25vh]  lg:h-80 md:ml-5 -mt-1 image shadow-md rounded-md "
                src={project.image}
                alt=""
              ></img>
              <div className="middle mr-2">
                <h2 className="font-bold text-xl project-title">
                  {project.title}
                </h2>
                <button
                  onClick={() => handleProjectClick(project.title)}
                  className="project-button  mt-10 bg-white px-4 py-2 border-2 border-pink-500"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          ) : (
            <div className="w-[100%] md:w-80 md:ml-5 mt-7 image shadow-md rounded-md">
              <div className="text-red-500 underline">Coming Soon</div>
            </div>
          )}
        </div>
      </div>
    );
  });

  return (
    <section className="mx-auto bg-gray-200 pt-4">
      <div>
        <h2 className="header">PROJECTS</h2>
        <div className="py-10">{projectsDisplayed}</div>
      </div>
    </section>
  );
};
