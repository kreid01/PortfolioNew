import bookHome from "../assets/book_homepage.png";
import book from "../assets/book.png";

export const Projects = ({ handleTwitterClick }) => {
  const projects = [
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
      image: book,
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
      image: bookHome,
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
      image: bookHome,
    },
    {
      title: "Customer Relation Managment",
      description: "A application to manage interactions between customers",
      techStack: [
        "Typescript",
        "React",
        "Nextjs",
        "Redux",
        "Apollo GraphQL",
        "Material UI Core",
        "Zod",
        "Tailwind",
      ],
      image: bookHome,
    },
  ];

  const projectsDisplayed = projects.map((project) => {
    const techStackMap = project.techStack.map((skill) => {
      return (
        <div className="px-3 py-1 my-1 mx-1 bg-red-500 text-white">{skill}</div>
      );
    });

    return (
      <div>
        <div className="grid grid-cols-2 my-10 ml-20">
          <div className="mr-8">
            <h1 className="font-semibold text-lg">{project.title}</h1>
            <p>{project.description}</p>
            <div className="flex flex-wrap">{techStackMap}</div>
          </div>
          <div className="relative container">
            <img
              className="w-80 ml-5 image shadow-md rounded-md"
              src={project.image}
              alt=""
            ></img>
            <div className="middle mr-2">
              <h2 className="font-bold text-xl project-title">
                {project.title}
              </h2>
              <button
                onClick={handleTwitterClick}
                className="project-button  mt-10 bg-white px-4 py-2 border-2 border-pink-500"
              >
                LEARN MORE
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
        <div className="py-10">{projectsDisplayed}</div>
      </div>
    </section>
  );
};
