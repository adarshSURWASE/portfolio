import gym from "../assets/gym.png";
import freefire from "../assets/freefire.png";

function Projects() {
  return (
    <div className="projects">

      <h2>My Projects</h2>

      <div className="project-grid">

        <div className="project-card">

          <img src={gym} alt="Gym Project"/>

          <h3>Gym Management System</h3>

          <p>MERN stack gym management website.</p>

          <div className="project-buttons">
            <a href="#" className="btn-outline">GitHub</a>
            <a href="#" className="btn">Live Demo</a>
          </div>

        </div>

        <div className="project-card">

          <img src={freefire} alt="Free Fire UI"/>

          <h3>Free Fire UI Website</h3>

          <p>Gaming UI website built using HTML, CSS and JavaScript.</p>

          <div className="project-buttons">
            <a href="#" className="btn-outline">GitHub</a>
            <a href="#" className="btn">Live Demo</a>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Projects;
