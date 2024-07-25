
import img from "../assets/images/profile-image.jpg"

import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import AOS from 'aos';

import 'aos/dist/aos.css'


const About = () => {
  AOS.init()
  return (
    <>
      <section id='about' className='pt-5'>
        <div className="container-fluid">
          <h3 className='text-center'>ABOUT ME</h3>
          <div className="row pt-5 pb-5 ms-5 me-5">
            <div className="col-md-6" data-aos="fade-right">
              <h5 className='pt-3 pb-3' >I am a dedicated and passionate Front-End Developer with a keen eye for detail and a strong commitment to creating exceptional user experiences.</h5>
              <p className='pt-3 pb-3 text-tertiary'>
              I specialise in creating visually appealing and highly functional and responisve websites and applications. My expertise lies in transforming design concepts into interactive, user-friendly digital experiences using the latest web technologies. I am committed to continuous learning and staying updated with industry trends to deliver the best solutions.
              </p>
              <div className="row pt-5">
                <div className="col-md-6"><h5>
                  </h5>Phone
                  <p>+233 560 85 2514</p>
                </div>
                <div className="col-md-6">
                  <h5>Email</h5>
                  <p>ahmedboabae2@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center"  data-aos="fade-left">
              <div className="card " style={{maxHeight:"450px",maxWidth:"350px"}}>
                  <img src={img} alt="" className='img-fluid'  />
                  <div className="card-footer">
                    <ul className='list d-flex justify-content-around ps-0'>
                      <li className='list-group-item'><a href="https://x.com/_02ahmed" className='text-secondary'><FaTwitter fontSize={30}/></a></li>
                      <li className='list-group-item'><a href="https://www.linkedin.com/in/ahmed-boabae/" className='text-secondary'><FaLinkedin fontSize={30}/></a></li>
                      <li className='list-group-item'><a href="https://github.com/02-ahmed" className='text-secondary'><FaGithub fontSize={30}/></a></li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About