import useJsonData from '../utils/hooks/useJsonData.jsx'
import { ProjectCard } from "../components/ProjectCard";

const Projects = () => {
  const { data: projectData, error} = useJsonData('projects.json')
  if (error) return <p>Erreur: {error}</p>;

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
            imageUrl={project && project.image_url ? `images/${project.image_url}` : 'https://picsum/300/200'}
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
