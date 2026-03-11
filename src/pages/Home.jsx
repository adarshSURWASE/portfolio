import profile from "../assets/profile.png";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <h1 className="name">
          Hi, I am <span>Adarsh Surwase</span>
        </h1>

        <h2 className="role">
          <Typewriter
            words={[
              "Java Full Stack Developer",
              "MERN Stack Developer",
              "React Developer",
              "Backend Developer"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <div className="hero-buttons">
          <a href="#contact" className="btn">Hire Me</a>

          <a
            href="https://github.com/adarshSURWASE"
            target="_blank"
            className="btn-outline"
          >
            GitHub
          </a>

          <a href="/resume.pdf" download className="btn">
            Download Resume
          </a>
        </div>

        <p className="status">🚀 Open to Internship Opportunities</p>

      </div>

      <div className="hero-right">
        <img src={profile} alt="Adarsh Surwase" />
      </div>

    </section>
  );
}

export default Home;
