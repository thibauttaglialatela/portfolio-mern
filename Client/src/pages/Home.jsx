import Hero from "../components/Hero";
import { useUser } from "../context/useUser.js";

const Home = () => {
  const { userData } = useUser();


  if (!userData) return <p>Chargement des données utilisateur...</p>;
  if (userData.error) return <p>Erreur : {userData.error}</p>

  const avatarUrl = userData.avatar_url ? `./images/${userData.avatar_url}` : "https://via.placeholder.com/150";

  return (
    <Hero
      avatarUrl={avatarUrl}
      avatarAlt={userData.avatar_alt}
      biography={userData.biography || "Biographie indisponible"}
    />
  );
};

export default Home;
