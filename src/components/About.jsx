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
    "Git",
    "React Query",
    "Nodejs",
    "Expressjs",
    "Material UI Core",
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  setInterval(() => {
    const hiddenElements = document.querySelectorAll(".not-shown");
    const hiddenPages = document.querySelectorAll(".not-shown-project");

    hiddenPages.forEach((el) => observer.observe(el));

    hiddenElements.forEach((el) => observer.observe(el));
  }, 1000);

  const mySkillsDisplayed = mySkills.map((skill) => {
    return (
      <div className="px-3 py-1 my-1 mx-1 bg-red-500 text-white">{skill}</div>
    );
  });

  return (
    <section className="mx-auto md:px-12 lg:px-32 -mt-2 xl:px-64">
      <div className="not-shown">
        <h2 className="header">ABOUT</h2>
        <div className="py-10  mt-16 flex flex-col md:flex-row justify-center about">
          <div>
            <img
              className="h-72 w-72 rounded-full mx-auto"
              src="https://weareformation.com/wp-content/uploads/2021/05/louis-du-mont-herbert-in-cycles-768x768.jpg"
              alt=""
            />
            <p className="w-[60vw] md:w-[35vw] lg:w-[30vw] mt-6 text-center ml-[20%] md:-ml-4 mb-5">
              I have been been interested in computers since I was young and
              have a love and passion for solving software problems and creating
              programmes.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl text-center mb-5">My Skills</h3>
            <div className="md:ml-20 w-[75vw] mx-auto md:w-[43vw] lg:w-[35vw] flex flex-wrap">
              {mySkillsDisplayed}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};