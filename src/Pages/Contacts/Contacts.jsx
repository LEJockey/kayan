import React from 'react'
import './Contacts.css'
import {ImMap2} from 'react-icons/im'
import {FaPhoneFlip} from 'react-icons/fa6'
import {TbMailFilled} from 'react-icons/tb'
import ContactForm from './../../Components/ContactForm/ContactForm';

const Contacts = () => {
  return (
    <>

      <div className="section-bg">
        
        <div className="overlay"></div>

        <div className='section-content'>

          <div className="section-head text-white">

            <h1>CONTACT US</h1>

          </div>

        </div>

      </div>

      <section className='contact'>
        
        <div className="row mx-0">

          <div className="col-md-4 details bg-address">

            <div className="icon">
              <ImMap2 />
            </div>

            <div className="more-details">

              <h1>ADDRESS</h1>
              <p>Kilo 95 Cairo-Ismailia Desert Road, Al-Salam Association – Ismailia – Egypt</p>

            </div>

          </div>

          <div className="col-md-4 details bg-phone">

            <div className="icon">
              <FaPhoneFlip/>
            </div>

            <div className="more-details">

              <h1>phone</h1>
              <p>+201005552150 <br/>+201061116121</p>

            </div>
          </div>

          <div className="col-md-4 details">

            <div className="icon">
              <TbMailFilled/>
            </div>

            <div className="more-details">

              <h1>email</h1>
              <p>info@kayanfrozenfoods.com</p>

            </div>

          </div>
        </div>

        <ContactForm/>
      </section>

    </>
  )
}

export default Contacts