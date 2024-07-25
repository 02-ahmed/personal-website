

import { FaHtml5, FaJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import AOS from 'aos';

import 'aos/dist/aos.css'

const Skills = () => {
  AOS.init()
  return (
    <>
      <section id='skills' className='mt-5'>
        <div className="container-fluid">
          <h3 className='text-center'>SKILLS</h3>
          <div className="row">
            <div className="col-6 text-center" data-aos="zoom-in">
              <p>
                <a href="#" className='text-secondary'><FaHtml5 fontSize={120}/></a>
              </p>
              <p>
                <a href="#" className='text-secondary'><FaCss3 fontSize={120}/></a>
              </p>
              <p>
                <a href="#" className='text-secondary'><FaJs fontSize={120}/></a>
              </p>
              <p>
                <a href="#"className='text-secondary'><FaPython fontSize={120}/></a>
              </p>
            </div>
            <div className="col-6 text-center" data-aos="zoom-out">
              <p>
                <a href="#" className='text-secondary'><FaReact fontSize={120}/></a>
              </p>
              <p>
                <a href="#" className='text-secondary'><SiTypescript fontSize={120}/></a>
              </p>
              <p>
                <a href="#" className='text-secondary'><FaBootstrap fontSize={120}/></a>
              </p>
              <a href="#" className='text-secondary'><FaGithub fontSize={120}/></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills