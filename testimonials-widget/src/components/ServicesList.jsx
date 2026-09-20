import { useState } from "react";
import Service from "./Service";
import services from "../data/services";

function ServicesList() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const categories = ["All Services", "Food Support", "Meals", "Social", "Skills", "Advice"];

  const filteredServices =
    activeCategory === "All Services"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div>
      <div className="filter-buttons">
        {categories.map((cat) => (
         <button
  key={cat}
  className={activeCategory === cat ? "filter-btn active" : "filter-btn"}
  onClick={() => setActiveCategory(cat)}
  aria-pressed={activeCategory === cat}
  aria-label={`Filter services by ${cat}`}
>
  {cat}
</button> 
        ))}
      </div>

      <div className="services-grid">
        {filteredServices.map((s) => (
          <Service
            key={s.id}
            category={s.category}
            title={s.title}
            description={s.description}
            location={s.location}
            tag={s.tag}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesList;