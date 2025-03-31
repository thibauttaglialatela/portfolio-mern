import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []); // Exécuter fetchUserData seulement au montage

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:3030/api/portfolio/user");
      if (!response.ok) {
        throw new Error("Échec dans la récupération");
      }
      const data = await response.json();
      console.log("Data fetched:", data);
      setUserData(data[0]); // Mettre à jour userData
      console.log("Avatar URL générée :", `http://localhost:3030/images/${data[0].avatar_url}`);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <Hero
      avatarUrl={userData && userData.avatar_url ? `http://localhost:3030/images/${userData.avatar_url}` : "https://via.placeholder.com/150"}
      avatarAlt={userData.avatar_alt}
      biography={userData?.biography || "Biographie indisponible"} // Vérification avant d'accéder à biography
    />
  );
};

export default Home;
