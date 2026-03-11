import scholarAI from "../assets/scholarAI.png";
import chatbot from "../assets/AI-Chatbot.png";
import bmw from "../assets/BMW.png";
import gym from "../assets/gym.png";
import freefire from "../assets/freefire.png";

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">

        {/* SCHOLAR AI */}
        <div className="project-card">
          <img src={scholarAI} alt="Scholar AI" />
          <h3>SCHOLAR AI</h3>
          <p>AI based student learning assistant platform.</p>

          <div className="project-buttons">
            <a href="https://github.com/adarshSURWASE/SCHOLAR-AI" target="_blank">GitHub</a>
          </div>
        </div>


        {/* AI Chatbot */}
        <div className="project-card">
          <img src={chatbot} alt="AI Chatbot" />
          <h3>AI Chatbot JSP Servlet</h3>
          <p>AI chatbot built using Java, JSP and Servlets.</p>

          <div className="project-buttons">
            <a href="https://github.com/adarshSURWASE/AI_Chatbot_JSP_Servlet" target="_blank">GitHub</a>
          </div>
        </div>


        {/* BMW Showroom */}
        <div className="project-card">
          <img src={bmw} alt="BMW Showroom" />
          <h3>BMW Showroom Project</h3>
          <p>Car showroom management system with modern UI.</p>

          <div className="project-buttons">
            <a href="https://github.com/adarshSURWASE/BMW-Showroom-Project" target="_blank">GitHub</a>
          </div>
        </div>


        {/* ST Gym */}
        <div className="project-card">
          <img src={gym} alt="Gym System" />
          <h3>Gym Management System</h3>
          <p>Gym management web system using Java and PostgreSQL.</p>

          <div className="project-buttons">
            <a href="https://github.com/adarshSURWASE/st-gym" target="_blank">GitHub</a>
          </div>
        </div>


        {/* FreeFire UI */}
        <div className="project-card">
          <img src={freefire} alt="FreeFire UI" />
          <h3>FreeFire UI Website</h3>
          <p>Gaming UI website built using HTML, CSS and JavaScript.</p>

          <div className="project-buttons">
            <a href="https://github.com/adarshSURWASE/freefire-game-ui" target="_blank">GitHub</a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;
