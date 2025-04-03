export const ProjectCard = ({
  name,
  content,
  imageUrl,
  imageAlt,
  githubLink,
  liveDemoLink,
}) => {
  return (
    <article className="card w-full shadow-xl shadow-orange-400">
      <figure className="px-10 pt-10">
        <img src={imageUrl} alt={imageAlt} className="rounded-xl object-contain" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-bold">{name}</h2>
        <p className="text-left">{content}</p>
        <div className="card-actions">
          <a
            href={githubLink}
            target="_blank"
            className="link link-hover link-secondary"
          >
            Github du projet
          </a>
          <a
            href={liveDemoLink}
            target="_blank"
            className="link link-hover link-secondary"
          >
            {liveDemoLink ? "Site web" : ""}
          </a>
        </div>
      </div>
    </article>
  );
};
