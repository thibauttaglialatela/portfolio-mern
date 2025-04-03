import { useEffect, useState } from "react";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  const [skillData, setSkillData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_BASE_URL_API;

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const result = await fetch(`${BASE_URL}api/portfolio/skills`);
        if (!result.ok) {
          throw new Error("Echec dans la récupération des données");
        }
        const data = await result.json();
        setSkillData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSkillData();
  }, [BASE_URL]);

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>Erreur: {error}</p>;


  return (
    <>
      <h1 className="text-4xl lg:text-7xl font-bold text-center underline mt-2 lg:mt-6">
        Mes compétences
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 place-items-center my-4">
        {skillData.map((skill) => (
          <SkillCard
            key={skill._id}
            logoUrl={`http://localhost:3030/icons/${skill.logo_url}`}
            logoAlt={skill.logo_alt}
            category={skill.category}
            level={skill.level}
            name={skill.name}
          ></SkillCard>
        ))}
      </section>
    </>
  );
};

export default Skills;
