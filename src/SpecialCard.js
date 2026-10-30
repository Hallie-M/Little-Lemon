function SpecialCard ({name,price,description}) {
  return ( 
    <article>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{description}</p>
      {/* <a href ="#order">Order a delivery</a> */}
    </article>

  )
}
export default SpecialCard;
