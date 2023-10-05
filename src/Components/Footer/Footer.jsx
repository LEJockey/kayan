import React from 'react'
import './Footer.css'
import footerLogo from '../../assests/footer-logo.png'
import event1 from '../../assests/footer/event1-80x80.jpg'
import event2 from '../../assests/footer/event2-80x80.jpg'
import event3 from '../../assests/footer/event3-80x80.jpg'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaPhoneFlip} from 'react-icons/fa6'
import {GrMail} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer className='container-xxl px-0'>

      <div className='box'>

        <div className="row">

          {/* LOGO Col */}

          <div className="col-md-4">

            <div className="footer-logo">
              <img src={footerLogo} alt="Kayan Logo" />
            </div>

            <p>At the beginning of the year 2022 AD, Kayan Frozen Food Company was established by a group of food industry experts in Egypt, with a capacity of 30 trained workers, technicians and engineers</p>

            <p className='copy-right'>© 2023, Kayan Frozen Foods. All rights reserved.</p>

          </div>


          {/* EVENTS Col */}

          <div className="col-md-4 events">

            
            <div className="centering">
              
              <h1>RECENT EVENTS</h1>
              
              {/* Post News */}

              <div className='d-flex event-content overflow-hidden py-0 '>


                <div className="magazine d-inline-block">

                  <a href="https://kayanfrozenfoods.com/2022/12/07/post-news/">
                    
                    <img className='w-100' src= {event1} alt="" />

                  </a>

                </div>

                <div className='border-bottom d-inline-block flex-fill'>
                  
                  <time>DECEMBER 7, 2022</time>

                  <a title='Link to: Post News' href="https://kayanfrozenfoods.com/2022/12/07/post-news/">Post News</a>
          
                </div>

              </div>

              {/* Hello again */}

              <div className='d-flex event-content overflow-hidden py-0 '>


                <div className="magazine d-inline-block">

                  <a href="https://kayanfrozenfoods.com/2022/12/07/post-news/">
                    
                    <img className='w-100' src= {event2} alt="" />

                  </a>

                </div>

                <div className='border-bottom d-inline-block flex-fill'>
                  
                  <time>DECEMBER 7, 2022</time>

                  <a title='Link to: Hello again' href="https://kayanfrozenfoods.com/2022/12/07/hello-again/">Hello again</a>
          
                </div>

              </div>

              {/* Hello News */}

              <div className='d-flex event-content overflow-hidden py-0 '>


                <div className="magazine d-inline-block">

                  <a href="https://kayanfrozenfoods.com/2022/12/07/post-news/">
                    
                    <img className='w-100' src= {event3} alt="" />

                  </a>

                </div>

                <div className='border-bottom d-inline-block flex-fill'>
                  
                  <time>DECEMBER 7, 2022</time>

                  <a title='Link to: Hello News' href="https://kayanfrozenfoods.com/2022/12/07/hello-world/">Hello News</a>
          
                </div>

              </div>

            </div>

          </div>


          {/* CONTACT col */}
          <div className="col-md-4 icons">


            <div className="centering">

              <h1>CONTACT INFO</h1>

              <div className="contact-info">

                <ul className='m-0 p-0'>

                  {/* Address */}
                  <li>

                    <div className='d-inline-block contact-icon'>
                      <FaMapMarkerAlt/>
                    </div>

                    <strong>Address</strong>

                    <div className='contact-details'>
                    Kilo 95 Cairo-Ismailia Desert Road, Al-Salam Association – Ismailia – Egypt
                    </div>

                  </li>

                  {/* Phone */}
                  <li>

                    <div className='d-inline-block contact-icon'>
                      <FaPhoneFlip/>
                    </div>

                    <strong>Phone</strong>

                    <div className='contact-details mb-0'>
                    +201005552150
                    </div>
                    <div className='contact-details mt-0'>
                    +201061116121
                    </div>

                  </li>

                  {/* Email */}
                  <li>

                    <div className='d-inline-block contact-icon'>
                      <GrMail/>
                    </div>

                    <strong>Email</strong>

                    <div className='contact-details'>
                    info@kayanfrozenfoods.com
                    </div>

                  </li>

                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer
