import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
      biography: "",
      avatar_url: "",
      avatar_alt: "",
      social_links: {
        linkedin: "",
        github: ""
      }
    });
    const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
try {
  const result = await fetch('jsonData/user.json');

  if (!result.ok) {
throw new Error('Echec lors de la récupération des données');
  }
  const data = await result.json();
  setUser(data);
} catch (error) {
  setError(error.message)
}
    };
    fetchUserData()
  }, []);

  const userData = {
    error: error,
    biography: user.biography,
    avatar_url: user.avatar_url,
    avatar_alt: user.avatar_alt,
    linkedin: user.social_links?.linkedin,
    github: user.social_links?.github,
  };
 return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );

};


