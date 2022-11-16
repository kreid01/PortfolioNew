export const Nav = () => {
  return (
    <header className="w-[100vw] sticky top-0 z-10 bg-slate-700 border-b-4 border-red-500">
      <nav className=" w-[50vw]   text-white">
        <ul className="flex justify-around py-3">
          <li
            className="header-item"
            onClick={() =>
              window.scroll({
                top: 920,
                left: 100,
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
                top: 1600,
                left: 100,
                behavior: "smooth",
              })
            }
          >
            {" "}
            PROJECTS
          </li>
          <li className="header-item">
            {" "}
            <a href="#projects">BLOG</a>
          </li>
          <li className="header-item">
            {" "}
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
