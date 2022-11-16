export const About = () => {
  const mySkills = [
    "Javascript",
    "Typescript",
    "React",
    "Nextjs",
    "Redux",
    "ASP .Net",
    "Apollo GraphQL",
    "HTML",
    "CSS",
    "MongoDB",
    "PostgreSQL",
    "SQLServer",
    "Bootstrap",
    "Jest",
    "Tailwind",
    "SASS",
    "React Query",
    "Material UI Core",
  ];

  const mySkillsDisplayed = mySkills.map((skill) => {
    return (
      <div className="px-3 py-1 my-1 mx-1 bg-red-500 text-white">{skill}</div>
    );
  });

  return (
    <section className="mx-auto ">
      <h2 className="header">ABOUT</h2>
      <div className="py-10 flex justify-center about ">
        <div>
          <img
            className="h-72 w-72 rounded-full"
            src="https://weareformation.com/wp-content/uploads/2021/05/louis-du-mont-herbert-in-cycles-768x768.jpg"
            alt=""
          />
          <p className="w-[35vw] mt-6 text-center -ml-4">
            I have been been interested in computers since I was young but only
            recently discovered a love and passion for solving software problems
            and creating programmes.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl">My Skills</h3>
          <div className="w-[39vw] flex flex-wrap">{mySkillsDisplayed}</div>
        </div>
      </div>
    </section>
  );
};
