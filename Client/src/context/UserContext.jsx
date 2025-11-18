import { createContext } from "react";
import useJsonData from "../utils/hooks/useJsonData";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { data: user, error, loading } = useJsonData('user.json')

  const userData = {
    loading: loading,
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


