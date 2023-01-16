import sthlm from "../assets/STHLM.jpg";

export const About = () => {
  const mySkills = [
    "Javascript",
    "Typescript",
    "React",
    "NextJS",
    "Redux",
    "ASP .Net",
    "GraphQL",
    "Apollo GraphQL",
    "Nexus",
    "HTML",
    "CSS",
    "MongoDB",
    "SQL",
    "Jest",
    "Tailwind",
    "SASS",
    "Blazor",
    "Git",
    "NodeJS",
    "ExpressJS",
    "Docker",
    "Prisma",
    "React Native",
    "xUnit",
    "AWS",
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
  }, 50);

  const mySkillsDisplayed = mySkills.map((skill) => {
    return (
      <div className="px-3 py-1 my-1 mx-1 bg-red-500 text-white">{skill}</div>
    );
  });

  return (
    <section className="mx-auto -mt-2 flex">
      <div>
        <img
          src={sthlm}
          alt=""
          className="w-[57vw] sthlm object-scale-down hidden xl:block"
        />
      </div>
      <div>
        <h2 className="header">ABOUT</h2>
        <div className=" py-5 h-[70%] mx-auto xl:pl-[5vw]  xl:w-[40vw] flex flex-col w-[100vw]  justify-center about">
          <p className="about-container w-[70vw] mx-auto xl:m-0 md:w-[60vw] xl:w-[35vw] my-10 lg:my-10">
            I have been been interested in computers since I was young and I am
            constantly seeking for new methods to develop my coding skills and
            knowledge.
          </p>
          <h3 className="w-[80vw] md:w-[60vw] about-container mx-auto xl:mx-0 font-bold text-xl mt-5">
            My Skills
          </h3>
          <div className="w-[80vw] mx-auto  xl:mx-0 md:w-[60vw] about-container xl:w-[35vw] flex flex-wrap mb-5">
            {mySkillsDisplayed}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
