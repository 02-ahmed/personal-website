import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init();
  return (
    <section id="home">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-8 mx-auto text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="mb-4">
              <span className="wave-emoji">👋</span> Welcome to my space
            </p>
            <h1 className="display-3 fw-bold mb-4 gradient-text">
              Turning Ideas Into <br /> Modern Web Experiences
            </h1>
            <p className="lead mb-5 text-secondary">
              Frontend developer passionate about crafting clean, intuitive
              interfaces and bringing creative web solutions to life.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="#works"
                className="btn btn-gradient btn-lg rounded-pill px-4"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="btn btn-outline-dark btn-lg rounded-pill px-4"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
