const icons = {
  "Food Support": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  "Meals": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 11h18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
      <path d="M12 11V4" />
      <path d="M8 4v3" />
      <path d="M16 4v3" />
    </svg>
  ),
  "Social": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="7" r="4" />
      <path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
      <circle cx="17" cy="7" r="3" />
    </svg>
  ),
  "Skills": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.5 3.5 20.5 9.5" />
      <path d="M3 21l4-1 10-10-3-3L4 17Z" />
    </svg>
  ),
  "Advice": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 1 1 9-8.5Z" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
    </svg>
  ),
  "Family Support": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

function Service({ category, title, description, location, tag }) {
  return (
    <div className="service-card">
      <div className="service-icon" aria-hidden="true">{icons[category]}</div>
      <span className="service-category">{category}</span>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <div className="service-meta">
        <span className="service-location">{location}</span>
        <span className="service-tag">{tag}</span>
      </div>
      <a href="contact.html" className="service-link">Learn More</a>
    </div>
  );
}

export default Service;