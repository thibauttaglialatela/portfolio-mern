import { useState, useEffect } from "react";
import { ProjectCard } from "../components/ProjectCard";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_BASE_URL_API;

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`${BASE_URL}api/portfolio/projects`);

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }

        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjectData();
  }, [BASE_URL]);

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <>
      <h1 className="text-4xl lg:text-7xl font-bold text-center underline mt-2 lg:mt-6">
        Mes projets
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 place-items-center my-4">
        {projectData.map((project) => (
          <ProjectCard
            key={project._id}
            name={project.name}
            content={project.content}
            imageUrl={project && project.image_url ? `${BASE_URL}images/${project.image_url}` : 'https://picsum/300/200'}
            imageAlt={project.image_alt}
            githubLink={project.github_link}
            liveDemoLink={project.live_demo_link}
          />
        ))}
      </section>
    </>
  );
};

export default Projects;
