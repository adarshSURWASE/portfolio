import { FaLaptopCode, FaServer, FaDatabase } from "react-icons/fa";

function Services() {
  return (
    <section className="services" id="services">

      <h2 className="section-title">What I Do</h2>

      <div className="services-container">

        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Frontend Development</h3>
          <p>
            Build responsive and modern web interfaces using
            HTML, CSS, JavaScript and React.
          </p>
        </div>

        <div className="service-card">
          <FaServer className="service-icon" />
          <h3>Backend Development</h3>
          <p>
            Develop secure backend systems using
            Node.js, Express, Java and REST APIs.
          </p>
        </div>

        <div className="service-card">
          <FaDatabase className="service-icon" />
          <h3>Database Management</h3>
          <p>
            Design and manage databases using
            MongoDB and MySQL for scalable applications.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;
