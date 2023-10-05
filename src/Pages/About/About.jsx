import React from 'react'
import './About.css'
import chairman1 from '../../assests/about/chairman/Mr-Wael-Rageh-Chairman-1-300x300.jpeg'
import chairman2 from '../../assests/about/chairman/head2.jpg'

const About = () => {
  return (
    <>

      <div className="section-bg">
        
        <div className="overlay"></div>

        <div className='section-content'>

          <div className="section-head text-white">

            <h1>ABOUT KAYAN COMPANY</h1>

          </div>

        </div>

      </div>

      <section className='about container-xxl'>

      <div className="box-container d-flex justify-content-center">

        <div className="box">

          <div className="row">

            <figcaption className="col-md-6 d-flex align-items-center bg-silver">

              <div>

                <h1>WHO WE ARE</h1>

                <p>At the beginning of the year 2022 AD, Kayan Frozen Food Company was established by a group of food industry experts in Egypt, with a capacity of 30 trained workers, technicians and engineers. The company focuses on the activity of the frozen food industry with the aim of meeting the needs of the Egyptian market, in addition to meeting the growing need of the global markets for luxury Egyptian products.</p>

              </div>

            </figcaption>

            <figure className="col-md-6 m-0 d-flex justify-content-center fig1">
            </figure>


          </div>

        </div>

      </div>


      <div className="box-container special-container">

        <div className="box">

          <div className="row special-flex">


            <figure className="col-md-6 m-0 d-flex justify-content-center fig2">
            </figure>

            <figcaption className="col-md-6 d-flex align-items-center">

              <div>

                <h1>VISION,<br/>OBJECTIVES<br/>AND VALUE</h1>

                <p>
                  <strong>VISION</strong> <br/>
                  
                  To become a leading company in the coming years in many countries of the world.             
                </p>

                <p>
                  <strong>OBJECTIVES</strong> <br/>
                  
                  Opening markets all over the world and reaching “Kayan” a global brand required by consumers.
                </p>

                <p>
                  <strong>VALUE</strong> <br/>
                  
                  Paying attention to the quality of the product and its quality of manufacture, in order for Kayan to become a competitor to the largest companies in Europe and the Middle East.                
                </p>

              </div>

            </figcaption>

          </div>

        </div>

      </div>


      </section>

      <div className='chairman bg-silver'>

        <div className="container-xxl px-0 special-container">

          <div className="box">

            <div className="row">

              <div className='flex-container no-flex'>

              <div className='chairman1'>
                <img src={chairman1} alt="MR- Wael" />

                <div className='chairman-details'>
                  <h1>Wael rageh</h1>
                  <p>Chairman</p>
                </div>

              </div>

              <div className='chairman2'>
                <img src={chairman2} alt="MR- Mohamed" />

                <div className='chairman-details'>
                  <h1>MOHAMED ELGEWILY</h1>
                  <p>Vice Chairman</p>
                </div>

              </div>

              </div>

            </div>

          </div>
        </div>

      </div>
      
    </>
  )
}

export default About