import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>surwaseadarsh16@email.com</p>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <a
            href="https://linkedin.com/in/adarshsurwase"
            target="_blank"
          >
            linkedin.com/in/adarshsurwase
          </a>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <a
            href="https://github.com/adarshSURWASE"
            target="_blank"
          >
            github.com/adarshSURWASE
          </a>
        </div>

      </div>

    </section>
  );
}

export default Contact;
