import { useEffect, useState } from "react";
import { HobbyCard } from "../components/HobbyCard";

export const Hobbies = () => {
  const [hobbiesData, setHobbiesData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const BASE_URL = import.meta.env.VITE_BASE_URL_API;

  useEffect(() => {
    const fetchHobbiesData = async () => {
      try {
        const response = await fetch(`${BASE_URL}api/portfolio/hobbies`);

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }

        const data = await response.json();
        setHobbiesData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchHobbiesData();
  }, [BASE_URL]);

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <>
      <h1 className="text-4xl lg:text-7xl font-bold text-center underline mt-2 lg:mt-6">
        Mes centres d'intérét
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 place-items-stretch lg:my-6 my-4">
        {hobbiesData.map((hobby) => (
          <HobbyCard
          key={hobby._id}
            imageUrl={hobby && hobby.picture_url ? `${BASE_URL}images/${hobby.picture_url}` : 'https://picsum/300/200'}
            imageAlt={hobby.picture_alt}
            content={hobby.content}
            name={hobby.name}
            
          />
        ))}
      </section>
    </>
  );
};
