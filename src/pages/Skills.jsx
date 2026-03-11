import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiSpringboot } from "react-icons/si";

function Skills() {
  return (
    <div className="skills">

      <h2>Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <FaHtml5 size={40}/>
          <p>HTML</p>
        </div>

        <div className="skill-card">
          <FaCss3Alt size={40}/>
          <p>CSS</p>
        </div>

        <div className="skill-card">
          <FaJs size={40}/>
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <FaReact size={40}/>
          <p>React</p>
        </div>

        <div className="skill-card">
          <FaNodeJs size={40}/>
          <p>Node.js</p>
        </div>

        <div className="skill-card">
          <SiMongodb size={40}/>
          <p>MongoDB</p>
        </div>

        <div className="skill-card">
          <FaJava size={40}/>
          <p>Java</p>
        </div>

        <div className="skill-card">
          <SiSpringboot size={40}/>
          <p>Spring Boot</p>
        </div>

      </div>

    </div>
  );
}

export default Skills;