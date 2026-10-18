import { useState, useEffect } from "react";

function StatCounter({ target, suffix, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <article className="stat-card">
      <h3>{count}{suffix}</h3>
      <p>{label}</p>
    </article>
  );
}

export default StatCounter;