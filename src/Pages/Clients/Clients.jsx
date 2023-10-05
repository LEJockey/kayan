import React from 'react'
import './Clients.css'
import Customers from './../../Components/Customers/Customers';

const Clients = () => {
  return (
    <>

      <div className="section-bg">
        
        <div className="overlay"></div>

        <div className='section-content'>

          <div className="section-head text-white">

            <h1>OUR CLIENTS</h1>

          </div>

        </div>

      </div>

      <section className='clients container-xxl'>

        <div className="box-container d-flex justify-content-center">

          <div className="box">

            <div className="row">

              <figcaption className="col-md-6 d-flex align-items-center bg-silver">

                <div>

                  <h1>OUR COMPANY CLIENTS</h1>

                  <p>
                    
                    <strong>Global markets</strong> <br/>

                    Kayan Company seeks to open international markets in Europe, America and Canada,……
                  </p>

                  <p>
                    
                    <strong>Arab markets</strong> <br/>
                  
                    The company has clients in a number of Arab countries, including Libya and Saudi Arabia. Kayan Company is seeking to open other markets in the Gulf countries and the Arab Maghreb countries……
                  </p>

                  <p>
                    
                    <strong>Local market</strong> <br/>

                    The company has a large number of customers in the local market….
                  </p>

                </div>

              </figcaption>

              <figure className="col-md-6 m-0 d-flex justify-content-center fig1">
              </figure>


            </div>

          </div>

        </div>

      </section>

      <Customers/>
      
    </>
  )
}

export default Clients