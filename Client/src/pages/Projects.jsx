import useJsonData from '../utils/hooks/useJsonData'
import { ProjectCard } from "../components/ProjectCard";

const Projects = () => {
  const { data: projectData, error, loading } = useJsonData('projects.json');

  if (loading) return <p className="text-center mt-4">Chargement des projets...</p>;
  if (error) return <p className="text-center text-red-500 mt-4">Erreur : {error}</p>;

  return (
    <>
      <h1 className="text-4xl lg:text-7xl font-bold text-center underline mt-2 lg:mt-6">
        Mes projets
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 place-items-center my-4">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            content={project.content}
            imageUrl={
              project?.image_url
                ? `${import.meta.env.BASE_URL}images/${project.image_url}`
                : 'https://picsum.photos/300/200'
            }
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