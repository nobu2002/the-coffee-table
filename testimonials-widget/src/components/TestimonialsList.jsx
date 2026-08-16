import Testimonial from "./Testimonial";
import testimonials from "../data/testimonials";

function TestimonialsList() {
  return (
    <div className="testimonials-grid">
      {testimonials.map((t) => (
        <Testimonial
          key={t.id}
          name={t.name}
          quote={t.quote}
          photo={t.photo}
          center={t.center}
        />
      ))}
    </div>
  );
}

export default TestimonialsList;