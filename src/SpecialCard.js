function SpecialCard ({name,price,description,image}) {
  return ( 
    <article>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{description}</p>
    </article>

  )
}
export default SpecialCard;
