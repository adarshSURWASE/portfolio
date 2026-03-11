import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiSpringboot } from "react-icons/si";

function Skills() {
  return (
    <section className="skills-section">

      <h2 className="section-title">Skills</h2>

      <div className="skills-slider">

        <div className="skills-track">

          <div className="skill-card">
            <FaHtml5 />
            <p>HTML</p>
          </div>

          <div className="skill-card">
            <FaCss3Alt />
            <p>CSS</p>
          </div>

          <div className="skill-card">
            <FaJs />
            <p>JavaScript</p>
          </div>

          <div className="skill-card">
            <FaReact />
            <p>React</p>
          </div>

          <div className="skill-card">
            <FaNodeJs />
            <p>Node.js</p>
          </div>

          <div className="skill-card">
            <SiMongodb />
            <p>MongoDB</p>
          </div>

          <div className="skill-card">
            <FaJava />
            <p>Java</p>
          </div>

          <div className="skill-card">
            <SiSpringboot />
            <p>Spring Boot</p>
          </div>

          {/* Duplicate for infinite scroll */}

          <div className="skill-card">
            <FaHtml5 />
            <p>HTML</p>
          </div>

          <div className="skill-card">
            <FaCss3Alt />
            <p>CSS</p>
          </div>

          <div className="skill-card">
            <FaJs />
            <p>JavaScript</p>
          </div>

          <div className="skill-card">
            <FaReact />
            <p>React</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;
