import { useEffect, useState } from "react";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  const [skillData, setSkillData] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const result = await fetch('jsonData/skills.json');
        if (!result.ok) {
          throw new Error("Echec dans la récupération des données");
        }
        const data = await result.json();
        setSkillData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchSkillData();
  }, []);

  if (error) return <p>Erreur: {error}</p>;


  return (
    <>
      <h1 className="text-4xl lg:text-7xl font-bold text-center underline mt-2 lg:mt-6">
        Mes compétences
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 place-items-center my-4">
        {skillData.map((skill) => (
          <SkillCard
            key={skill.id}
            logoUrl={`./icons/${skill.logo_url}`}
            logoAlt={skill.logo_alt}
            category={skill.category}
            name={skill.name}
          ></SkillCard>
        ))}
      </section>
    </>
  );
};

export default Skills;
