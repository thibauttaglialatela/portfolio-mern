import Hero from "../components/Hero";
import { useUser } from "../context/useUser.js";

const Home = () => {
  const { userData } = useUser();

  if (userData.loading) return <p>Chargement des données utilisateur...</p>;
  if (userData.error) return <p>Erreur : {userData.error}</p>;

  //  Utilisation de import.meta.env.BASE_URL au lieu de ./images/
  const avatarUrl = userData.avatar_url
    ? `${import.meta.env.BASE_URL}images/${userData.avatar_url}`
    : "https://via.placeholder.com/150";

  return (
    <Hero
      avatarUrl={avatarUrl}
      avatarAlt={userData.avatar_alt}
      biography={userData.biography || "Biographie indisponible"}
    />
  );
};

export default Home;