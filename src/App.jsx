import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Services from "./pages/Services";


function App() {
  return (
    <div>

      <Navbar/>

      <section id="home">
        <Home/>
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="skills">
        <Skills/>
      </section>

      <section id="projects">
        <Projects/>
      </section>

      <section id="contact">
        <Contact/>
      </section>

      <section id="services">
        <Services/>
      </section>

      <Footer/>

    </div>
  );
}


export default App;