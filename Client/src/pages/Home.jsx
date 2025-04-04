import Hero from "../components/Hero";
import { useUser } from "../context/UserContext.jsx";

const Home = () => {
  const { userData, loading, error } = useUser();
  const BASE_URL = import.meta.env.VITE_BASE_URL_API;

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <Hero
      avatarUrl={userData && userData.avatar_url ? `${BASE_URL}images/${userData.avatar_url}` : "https://via.placeholder.com/150"}
      avatarAlt={userData.avatar_alt}
      biography={userData?.biography || "Biographie indisponible"} // Vérification avant d'accéder à biography
    />
  );
};

export default Home;
