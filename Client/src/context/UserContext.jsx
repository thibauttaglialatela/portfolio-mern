import { createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const userData = {
    biography:
      "Bienvenue sur mon portfolio de développeur web. J'y parle de moi, de mes projets de sites ou autres, de mes études et enfin de mes hobbies et passions. Aprés une formation à la Wild Code School et une autre en alternance à la 3W Academy m'ayant permis d'obtenir le Titre de développeur web Full-Stack, je suis prêt à me lancer dans de nouveaux défis...",
    avatar_url: "TAGLIALATELA_Thibaut_resized.jpg",
    avatar_alt: "Thibaut Taglialatela",
    social_links: {
      linkedin:
        "https://www.linkedin.com/in/thibauttaglialatela-apprentice-fullstack-developper/",
      github: "https://github.com/thibauttaglialatela",
    },
  };


  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
