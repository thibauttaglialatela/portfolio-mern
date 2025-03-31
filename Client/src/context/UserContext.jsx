import { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("http://localhost:3030/api/portfolio/user");
                if (!response.ok) {
                    throw new Error("Echec de la récupération des données");
                }
                const data = await response.json();
                setUserData(data[0]);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

    return (
        <UserContext.Provider value={{ userData, loading, error}}>
            {children}
        </UserContext.Provider>
    )

};

export const useUser = () => useContext(UserContext);