

import AOS from 'aos';

import 'aos/dist/aos.css'


const Home = () => {
  AOS.init();
  return (
    <>
      <section id='home' className='d-flex justify-content-center ' aria-labelledby="home-tab" >
        <div className="container-fluid " data-aos="fade-up" data-aos-duration="3000">
          <div className="row text-center ">
              <h1 className='pt-5 text-light'><strong>HI, I AM <br/>AHMED</strong></h1>
              <h5 className='text-light'>FRONT-END DEVELOPER</h5>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home