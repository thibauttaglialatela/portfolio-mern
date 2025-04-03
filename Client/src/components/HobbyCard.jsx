export const HobbyCard = ({imageUrl, imageAlt, content, name}) => {
    return (
        <article className="card w-full shadow-xl shadow-orange-400 h-full flex flex-col">
        <figure className="p-4">
          <img src={imageUrl} alt={imageAlt} className="rounded-xl object-contain w-full max-h-96" />
        </figure>
        <div className="card-body flex flex-col justify-between flex-1">
          <h2 className="card-title text-bold">{name}</h2>
          <p className="text-left">{content}</p>
        </div>
      </article>
    )
}