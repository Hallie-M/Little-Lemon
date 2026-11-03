function TestimonialCard({ name, rating, review }) {
  return (
    <article>

      <p
        role="img"
        aria-label={`Rating: ${rating.length} out of 5 stars`}
      >
        {rating}
      </p>


      <h3>{name} </h3>
      <p>{review}</p>
    </article>
  )
}
export default TestimonialCard;
