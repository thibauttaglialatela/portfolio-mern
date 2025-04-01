import { useUser } from "../context/UserContext.jsx";

const Footer = () => {
  const { userData } = useUser();

  return (
    <footer className="footer footer-center bg-orange-400 rounded-t-3xl text-black items-center p-4">
      <aside className="grid-flow-col items-center">
      <nav className="flex flex-col lg:flex-row gap-4 items-center">
          {userData && userData.social_links.linkedin && (
            <a
              href={userData.social_links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to my profile Linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#0077B5"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.281c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm13.5 11.281h-3v-5.604c0-1.336-.027-3.06-1.865-3.06-1.865 0-2.151 1.455-2.151 2.961v5.703h-3v-10h2.879v1.364h.041c.401-.76 1.381-1.558 2.843-1.558 3.039 0 3.6 2.002 3.6 4.604v5.59z" />
              </svg>
            </a>
          )}

        <p className="text-base font-bold lg:text-xl">
          Copyright © {new Date().getFullYear()} - Conçu par Thibaut-Louis
          Taglialatela
        </p>
        {userData && userData.social_links.github && (
        <a href={userData.social_links.github} target="_blank" rel="noopener noreferrer" aria-label="Link to my profile Github">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.113.793-.261.793-.577 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.611-4.042-1.611-.546-1.386-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.238 1.839 1.238 1.07 1.835 2.805 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.931 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.521.116-3.171 0 0 1.008-.322 3.301 1.23.958-.266 1.984-.398 3.004-.403 1.02.005 2.047.137 3.007.403 2.291-1.552 3.297-1.23 3.297-1.23.653 1.65.241 2.868.118 3.171.77.84 1.234 1.912 1.234 3.222 0 4.609-2.807 5.628-5.479 5.921.43.372.813 1.102.813 2.222 0 1.606-.014 2.898-.014 3.292 0 .319.19.694.8.576 4.765-1.588 8.2-6.082 8.2-11.382 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
        )}

      </nav>        
      </aside>

    </footer>
  );
};

export default Footer;
