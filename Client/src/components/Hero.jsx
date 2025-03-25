import React from "react";

const Hero = ({ avatarUrl, avatarAlt, biography }) => {
  return (
    <>
      <h1 className="text-4xl lg:text-7xl font-bold text-center underline mt-2 lg:mt-6">
        À propos de moi
      </h1>
      <section className="hero min-h-full mt-4">
        <div className="hero-content flex-col lg:flex-row">
          <figure>
            <img
              src={avatarUrl}
              alt={avatarAlt}
              className="w-screen max-w-none lg:max-w-sm lg:w-auto rounded-xl shadow-2xl"
            />
          </figure>
          <article className="card lg:w-96 w-screen card-sm lg:card-lg shadow-xl shadow-orange-400">
            <div className="card-body">
              <p className="py-6">
                "Attiré par le monde de l’informatique, depuis longtemps, j’ai
                profité d’une reconversion professionnelle pour me lancer
                définitivement dans l’aventure du développement web et notamment
                le développement Backend."
              </p>
              <div>
                <blockquote className="py-6">
                  Ce n'est pas parce que les choses sont difficiles que nous
                  n'osons pas. C'est parce que nous n'osons pas qu'elles sont
                  difficiles.
                </blockquote>
                <p className="italic">Sénéque</p>
              </div>
            </div>
          </article>

          <article className="card lg:w-96 w-screen card-sm lg:card-lg shadow-xl shadow-orange-400">
            <div className="card-body">
              <p className="py-6">{biography}</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Hero;
