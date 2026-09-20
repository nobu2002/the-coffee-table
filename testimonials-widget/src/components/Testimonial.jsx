function Testimonial({ name, quote, photo, center }) {
  return (
    <div className="testimonial-card">
      <img src={photo} alt={`Photo of ${name}`} className="testimonial-photo" />
      <p className="testimonial-quote">"{quote}"</p>
      <p className="testimonial-name">{name}</p>
      {center && <p className="testimonial-center">{center}</p>}
    </div>
  );
}

export default Testimonial;