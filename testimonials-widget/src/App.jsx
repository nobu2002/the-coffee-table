import "./App.css";
import TestimonialsList from "./components/TestimonialsList";
import ServicesList from "./components/ServicesList";

function App() {
  const isServicesPage = document.getElementById("root").dataset.page === "services";

  return (
    <div className="App">
      {isServicesPage ? (
        <>
          <h1>Our Services</h1>
          <ServicesList />
        </>
      ) : (
        <>
          <h1>Community Testimonials</h1>
          <TestimonialsList />
        </>
      )}
    </div>
  );
}

export default App;