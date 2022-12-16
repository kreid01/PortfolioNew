export const Nav = () => {
  const links = document.querySelectorAll(".header-item");

  if (links.length) {
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        links.forEach((link) => {
          link.classList.remove("active");
        });
        e.preventDefault();
        link.classList.add("active");
      });
    });
  }

  return (
    <header className="w-[100vw] sticky top-0 z-10 bg-slate-700 border-b-4 border-red-500">
      <nav className="w-[100vw] md:w-[55vw]  text-white">
        <ul className="flex justify-around py-3">
          <li
            className="header-item ml-5 md:ml-3"
            onClick={() =>
              window.scroll({
                top: 0,
                left: 100,
                behavior: "smooth",
              })
            }
          >
            {" "}
            HOME
          </li>
          <li
            className="header-item "
            onClick={() =>
              window.scroll({
                top:
                  window.innerWidth < 700
                    ? 800
                    : window.innerWidth < 1000
                    ? 920
                    : window.innerWidth < 1300
                    ? 920
                    : window.innerWidth < 1800
                    ? 920
                    : window.innerWidth < 2000
                    ? 930
                    : 1300,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            {" "}
            ABOUT
          </li>
          <li
            className="header-item"
            onClick={() =>
              window.scroll({
                top:
                  window.innerWidth < 700
                    ? 1590
                    : window.innerWidth < 1000
                    ? 1450
                    : window.innerWidth < 1300
                    ? 1450
                    : window.innerWidth < 1800
                    ? 1550
                    : window.innerWidth < 2000
                    ? 1800
                    : 2450,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            {" "}
            PROJECTS
          </li>
          <li className="header-item hidden"> BLOG</li>
          <li
            className="header-item"
            onClick={() =>
              window.scroll({
                top:
                  window.innerWidth < 700
                    ? 5400
                    : window.innerWidth < 1000
                    ? 5800
                    : 5800,
                behavior: "smooth",
              })
            }
          >
            {" "}
            CONTACT
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
