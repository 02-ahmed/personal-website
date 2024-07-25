import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <section id='contact'>
        <div className="container-fluid">
          <h3 className='text-center pt-5 pb-5'>CONTACT ME</h3>
          <div className="row ms-5 me-5">
            <div className="col-md-6 ps-5 pe-5">
              <form action="">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className='form-control'  placeholder='Name'/>
                  </div>
                  <div className="col-md-6">
                    <input type="email" className='form-control' placeholder='Email' />
                  </div>
                  <div className="col">
                    <input type="text" className='form-control' placeholder='Subject' />
                  </div>
                  <div className='col-12'>
                    <textarea className='form-control' placeholder='Message' style={{minHeight:"150px"}}></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-outline-secondary text-center col-12">Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="row g-4">
                <div className="col-12">
                  <h5>Ahmed</h5>
                  <p>Front-End Developer</p>
                </div>
                <div className="col-12">
                  <h5>Phone</h5>
                  <p>+233 56 085 2513</p>
                </div>
                <div className="col-12">
                  <h5>Email</h5>
                  <p>ahmedboabae2@gmail.com</p>
                </div>
                <div className="col-12">
                  <ul className='d-flex ms-0 ps-0 '>
                    <li className='list-group-item me-3'><a href="https://x.com/_02ahmed" className='text-secondary'><FaTwitter fontSize={30} /></a></li>
                    <li className='list-group-item ms-3 me-3'><a href="https://www.linkedin.com/in/ahmed-boabae/" className='text-secondary'><FaLinkedin fontSize={30}/></a></li>
                    <li className='list-group-item ms-3 me-3'><a href="https://github.com/02-ahmed" className='text-secondary'><FaGithub fontSize={30}/></a></li>
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

export default Contact