import Hero from "../components/Hero";
import { useUser } from "../context/UserContext.jsx";

const Home = () => {
  const { userData, loading, error } = useUser();

  if (loading) return <p>Chargement des données...</p>;
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
