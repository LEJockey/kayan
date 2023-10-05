import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
    return (
    <section className="row mx-0">
        <div className="col-md-6 map px-0">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.7837276815108!2d31.624653075559078!3d30.186171374852577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145802a9cb8b216d%3A0x6b9422c5434c91bc!2skayanfrozenfoods!5e0!3m2!1sen!2seg!4v1696159578077!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            title="Google Maps"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

        <div className="col-md-6 touch">

            <h1>GET IN TOUCH</h1>

            <form className='row' action="">
                <div className="form-floating my-2 col-sm-6 px-sm-1 ps-sm-0 px-0">
                    <input type="text" className="form-control" id="floatingName" placeholder="Name" required/>
                    <label className='mx-2' htmlFor="floatingName">Name*</label>
                </div>

                <div className="form-floating my-2 col-sm-6 px-sm-1 pe-sm-0 px-0">
                    <input type="Email" className="form-control" id="floatingEmail" placeholder="Email" required/>
                    <label className='mx-2' htmlFor="floatingEmail">Email*</label>
                </div>

                <div className="form-floating my-2 col-12 px-0">
                    <input type="phone" className="form-control" id="floatingPhone" placeholder="Phone"/>
                    <label htmlFor="floatingPhone">Phone*</label>
                </div>

                <div className="form-floating my-2 col-12 px-0">
                    <textarea className="form-control" placeholder="Leave your message here" id="floatingTextarea" cols={40} ></textarea>
                    <label htmlFor="floatingTextarea">Message*</label>
                </div>

                <div className="col-12 px-0 mt-3 mb-5">
                    <button type="submit">Submit</button>
                </div>

            </form>

        </div>
    </section>
    )
}

export default ContactForm