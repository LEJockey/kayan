import React from 'react'
import './Customers.css'
import part1 from '../../assests/partners/1- .jpg'
import part2 from '../../assests/partners/2- .jpg'
import part3 from '../../assests/partners/3- .jpg'
import part4 from '../../assests/partners/4- .jpg'
import part5 from '../../assests/partners/5- .jpg'
import part6 from '../../assests/partners/6- .jpg'

const Customers = () => {
  return (
    <div className='container-xxl customers px-0'>
    <div className="box mx-auto">
        
        <div className="row">

            <div className="col-6  col-md-4 col-lg-2 d-flex justify-content-center align-items-center">
                <img src={part1} alt="Partner 1" />
            </div>

            <div className="col-6  col-md-4 col-lg-2 d-flex justify-content-center align-items-center">
                <img src={part2} alt="Partner 2" />
            </div>

            <div className="col-6  col-md-4 col-lg-2 d-flex justify-content-center align-items-center">
                <img src={part3} alt="Partner 3" />
            </div>

            <div className="col-6  col-md-4 col-lg-2 d-flex justify-content-center align-items-center">
                <img src={part4} alt="Partner 4" />
            </div>

            <div className="col-6  col-md-4 col-lg-2 d-flex justify-content-center align-items-center">
                <img src={part5} alt="Partner 5" />
            </div>

            <div className="col-6  col-md-4 col-lg-2 d-flex justify-content-center align-items-center">
                <img src={part6} alt="Partner 6" />
            </div>

        </div>

    </div>

</div>
)
}

export default Customers