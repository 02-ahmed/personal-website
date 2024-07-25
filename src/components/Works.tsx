import React from 'react'

import aduane from '../assets/images/aduane-info.png';
import babies from '../assets/images/baby-shop.png';
import movies from '../assets/images/movie-hub.png';
import tasky from '../assets/images/tasky.png'

const Works = () => {
  return (
    <>
      <section id='works' className='mt-5'>
        <h3 className='text-center pb-5'>My Works</h3>
        <div className="container-fluid">
          <div className="row g-5 ms-5 me-5">
            <div className="col-md-6">
              <div className="card" style={{overflow:"hidden", border:"none"}}>
                <img src={aduane} alt="" />
                <div className="card-body text-center">
                  <a href="https://aduane-info.netlify.app/" target='_blank'>
                    <button className="btn btn-outline-secondary">Visit Site</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{overflow:"hidden", border:"none"}}>
                <img src={movies} alt="" />
                <a href="https://02movies-discovery.vercel.app/" target='_blank'>
                  <div className="card-body text-center">
                    <button className="btn btn-outline-secondary">Visit Site</button>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{overflow:"hidden", border:"none"}}>
                <img src={babies} alt="" />
                <div className="card-body text-center">
                  <a href="https://xoxobabies.netlify.app/" target='_blank'>
                    <button className="btn btn-outline-secondary">Visit Site</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{overflow:"hidden", border:"none"}}>
                <img src={tasky} alt="" className='border'/>
                <div className="card-body text-center">
                  <a href="https://o2tasky.netlify.app/" target='_blank'>
                    <button className="btn btn-outline-secondary">Visit Site</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Works