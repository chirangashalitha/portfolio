import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Featured from "./Components/About/Featured";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <div>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
          <Featured />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
