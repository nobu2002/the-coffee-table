import "./App.css";
import TestimonialsList from "./components/TestimonialsList";
import ServicesList from "./components/ServicesList";
import StatsSection from "./components/StatsSection";

function App() {
  const page = document.getElementById("root").dataset.page;

  return (
    <div className="App">
      {page === "services" && (
        <>
          <h1>Our Services</h1>
          <ServicesList />
        </>
      )}

      {page === "stats" && <StatsSection />}

      {!page && (
        <>
          <h1>Community Testimonials</h1>
          <TestimonialsList />
        </>
      )}
    </div>
  );
}

export default App;