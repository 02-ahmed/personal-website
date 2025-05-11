import img from "../assets/images/ahmedboabae.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init();
  return (
    <section id="about" className="pt-2 pb-5">
      <div className="container">
        <h2 className="text-center mb-5">
          <span className="emoji me-2">🧐</span>
          About Me
        </h2>

        <div className="row gy-5 align-items-center justify-content-between">
          <div
            className="col-lg-5"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="about-image-wrapper">
              <div className="image-container">
                <img
                  src={img}
                  alt="Ahmed Boabae"
                  className="img-fluid rounded-4"
                />
                <div
                  className="floating-card"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="emoji">💻</span>
                  <span>Frontend Developer</span>
                </div>
                <div
                  className="floating-card"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <span className="emoji">🎨</span>
                  <span>UI Enthusiast</span>
                </div>
                <div
                  className="floating-card"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <span className="emoji">🚀</span>
                  <span>Problem Solver</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="about-content">
              <div
                className="section-tag"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="emoji">👋</span> Nice to meet you!
              </div>

              <h3
                className="gradient-text mb-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Crafting Digital Experiences with Code and Creativity
              </h3>

              <div
                className="about-text"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p className="lead mb-4">
                  I'm a dedicated Frontend Developer who loves turning ideas
                  into beautiful, interactive web experiences. With a passion
                  for clean code and modern design, I create websites that not
                  only look great but also provide exceptional user experiences.
                </p>

                <p className="mb-4">
                  When I'm not coding, you'll find me exploring new
                  technologies, preparing to dive deeper into open-source
                  contributions, or learning about the latest web development
                  trends. I believe in continuous growth and staying current
                  with modern development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
