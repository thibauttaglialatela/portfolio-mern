import { HobbyCard } from "../components/HobbyCard";
import useJsonData from "../utils/hooks/useJsonData";

export const Hobbies = () => {
  const {data: hobbies, error, loading} = useJsonData('hobbies.json');

  if (loading) return <p>Chargement...</p>
  if (error) return <p>Erreur: {error}</p>
  if (!Array.isArray(hobbies)) return <p>Données invalides</p>

  return (
    <>
      <h1 className="text-4xl lg:text-7xl font-bold text-center underline mt-2 lg:mt-6">
        Mes centres d'intérét
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 place-items-stretch lg:my-6 my-4">
        {hobbies.map((hobby) => (
          <HobbyCard
          key={hobby.id}
            imageUrl={
              hobby.picture_url 
              ? `/images/${hobby.picture_url}` 
              : 'https://picsum/300/200'
            }
            imageAlt={hobby.picture_alt ?? ""}
            content={hobby.content ?? ""}
            name={hobby.name ?? ""}
            
          />
        ))}
      </section>
    </>
  );
};
