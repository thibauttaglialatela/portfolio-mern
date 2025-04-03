const SkillCard = ({ logoUrl, logoAlt, category, level, name }) => {
    return (
      <article className="card w-full lg:w-1/2 shadow-xl shadow-orange-400">
        <figure className="p-4">
          <img src={logoUrl} alt={logoAlt} className="object-contain w-full h-full"/>
        </figure>
        <section className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <div className="flex flex-col lg:flex-row md:w-full text-sm">
            <p>Catégorie : <strong>{category}</strong></p>
            <p>Niveau : {level}</p>
          </div>
        </section>
      </article>
    );
  };
  
  export default SkillCard;
  
