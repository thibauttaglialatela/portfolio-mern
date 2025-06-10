import Hero from "../components/Hero";
import { useUser } from "../context/UserContext.jsx";

const Home = () => {
  const { userData } = useUser();
  const BASE_URL = import.meta.env.VITE_BASE_URL_API;

  if (!BASE_URL) {
    console.warn("VITE_BASE_URL_API n'est pas défini.");
  }

  if (!userData) return <p>Chargement des données utilisateur...</p>;

  const cleanUrl = (base, path) =>
    `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

  const avatarUrl = userData.avatar_url
    ? cleanUrl(BASE_URL, `images/${userData.avatar_url}`)
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
