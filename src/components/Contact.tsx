import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  AOS.init();

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mb-3">
              <span className="emoji me-2">✨</span>
              Let's Connect
            </h2>
            <p className="lead text-secondary mb-5">
              Open to new opportunities and interesting collaborations
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-wrapper">
              <div
                className="contact-card"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="contact-header">
                  <div className="gradient-circle">
                    <span className="emoji">👋</span>
                  </div>
                  <h3 className="gradient-text">Get in Touch</h3>
                </div>

                <div className="contact-grid">
                  <a
                    href="mailto:ahmedboabae2@gmail.com"
                    className="contact-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-info">
                      <h4>Email</h4>
                      <p>ahmedboabae2@gmail.com</p>
                    </div>
                    <div className="contact-arrow">→</div>
                  </a>

                  <a
                    href="https://github.com/02-ahmed"
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="contact-icon">
                      <FaGithub />
                    </div>
                    <div className="contact-info">
                      <h4>GitHub</h4>
                      <p>Check out my code</p>
                    </div>
                    <div className="contact-arrow">→</div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ahmed-boabae/"
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="contact-icon">
                      <FaLinkedin />
                    </div>
                    <div className="contact-info">
                      <h4>LinkedIn</h4>
                      <p>Let's connect professionally</p>
                    </div>
                    <div className="contact-arrow">→</div>
                  </a>

                  <a
                    href="https://x.com/_02ahmed"
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="contact-icon">
                      <FaTwitter />
                    </div>
                    <div className="contact-info">
                      <h4>Twitter</h4>
                      <p>Follow my journey</p>
                    </div>
                    <div className="contact-arrow">→</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
