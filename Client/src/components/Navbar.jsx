import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar bg-orange-400 rounded-b-3xl p-4 sticky top-0 z-50">
      {/* Logo / Nom */}
      <div className="flex-1">
        <h3 className="text-sm lg:text-xl text-black font-bold">
          Thibaut TAGLIALATELA / Développeur PHP Symfony
        </h3>
      </div>

      {/* 📌 Menu mobile (avec dropdown) */}
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          {/* Bouton hamburger */}
          <div tabIndex={0} role="button" className="btn btn-neutral">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16 M4 12h16 M4 18h16"
              />
            </svg>
          </div>

          {/* Menu déroulant mobile */}
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-orange-400 rounded-box z-1 p-2 w-screen"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `btn mx-2 ${isActive ? "btn-active" : "btn-neutral hover:btn-accent"}`
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `btn mx-2 ${isActive ? "btn-active" : "btn-neutral hover:btn-accent"}`
                }
              >
                Compétences
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `btn mx-2 ${isActive ? "btn-active" : "btn-neutral hover:btn-accent"}`
                }
              >
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hobbies"
                className={({ isActive }) =>
                  `btn mx-2 ${isActive ? "btn-active" : "btn-neutral hover:btn-accent"}`
                }
              >
                Passions
              </NavLink>
            </li>
            {/* <li><NavLink to="#" className={(isActive) => isActive ? "btn btn-neutral btn-active mx-2" : "btn btn-soft mx-2"}>Se connecter</NavLink></li> */}
          </ul>
        </div>
      </div>

      {/* 📌 Menu desktop (visible uniquement sur grand écran) */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `btn mx-2 ${isActive ? "btn-active" : "btn-neutral hover:btn-accent"}`
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `btn mx-2 ${isActive ? "btn-active" : "btn-neutral hover:btn-accent"}`
              }
            >
              Compétences
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `btn mx-2 ${isActive ? "btn-active" : "btn-neutral hover:btn-accent"}`
              }
            >
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hobbies"
              className={({ isActive }) =>
                `btn mx-2 ${isActive ? "btn-active" : "btn-neutral hover:btn-accent"}`
              }
            >
              Passions
            </NavLink>
          </li>
          {/* <li><NavLink to="#" className={(isActive) => isActive ? "btn btn-neutral btn-active mx-2" : "btn btn-soft mx-2"}>Se connecter</NavLink></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
