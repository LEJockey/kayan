import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import mainProd1 from '../../assests/home/main-products/1-.jpg'
import mainProd2 from '../../assests/home/main-products/2-.jpg'
import mainProd3 from '../../assests/home/main-products/3-.jpg'
import prod1 from '../../assests/home/products/1-.png'
import prod2 from '../../assests/home/products/2-.png'
import prod3 from '../../assests/home/products/3-.png'
import prod4 from '../../assests/home/products/4-.png'
import prog1 from '../../assests/home/progress/1-.png'
import prog2 from '../../assests/home/progress/2-.png'
import prog3 from '../../assests/home/progress/3-.png'
import prog4 from '../../assests/home/progress/4-.png'
import event1 from '../../assests/home/recent-events/1.jpg'
import event2 from '../../assests/home/recent-events/2.jpg'
import event3 from '../../assests/home/recent-events/3.jpg' 
import Customers from '../../Components/Customers/Customers'
import ContactForm from './../../Components/ContactForm/ContactForm';

const Home = () => {

  let nums = document.querySelectorAll('.kyan-progress .number')
  let numsSection = document.querySelector('.kyan-progress')
  let started = false

  window.onscroll = () => {
    if (numsSection) {
      if (window.scrollY === numsSection.offsetTop) {
        if (!started) {
          nums.forEach((num) => startCount(num));
        }
        started = true;
      }
    }
  };
  function startCount(e) {
    let goal = e.dataset.goal
    let count = setInterval(() => {
      e.textContent++
      if (e.textContent === goal) {
        clearInterval(count)
      }
    }, 2000 / goal );
  }
  return (

    <>
    
      <main>
  
        {/* main slider  data-bs-ride="carousel" */   }
  
        <section id="carouselExampleFade" className="carousel slide carousel-fade z-1"  data-bs-ride="carousel" data-bs-interval="2000">
  
        <div className="overlay "></div>
          
          {/* Carousel-Indicators */}
          <div className="carousel-indicators z-3">
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active rounded-circle" aria-current="Slide 1" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" className=' rounded-circle' aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" className=' rounded-circle' aria-label="Slide 3"></button>
          </div>
          
          <div className="carousel-inner h-100 z-2">
            
            {/* Slide 1 */}
            <div className="carousel-item active h-100 position-relative item-1 d-flex justify-content-center align-items-center" data-bs-slide="fade">
  
            <div className="overlay z-2"></div>
              
              <div className="carousel-caption caption-1 z-3">
                <h1>KAYAN FROZEN FOODS</h1>
                <p>We care about selecting our products carefully. We travel to all governorates of Egypt to ensure that the ideal product is obtained in the ideal way. We also care not only about the standards of shape and size, but our greatest interest in the standards of product quality and method of harvesting.</p>
                <button>Discover more</button>
              </div>
  
            </div>
            
            {/* Slide 2 */}
            <div className="carousel-item h-100 position-relative item-2" data-bs-slide="fade">
  
            <div className="overlay z-2"></div>
  
              <div className="carousel-caption z-3">
                <h1>Fruits</h1>
                <p>Our fruits are the best, as Egyptian strawberries and mangoes are among the best varieties in the world, and on top of that we pick the best of the best from the Egyptian fields directly to the frozen packages to the consumer all over the world.</p>
                <button>Discover more</button>
              </div>
              
            </div>
            
            {/* Slide 3 */}
            <div className="carousel-item h-100 position-relative item-3" data-bs-slide="fade">
  
            <div className="overlay z-2"></div>
              
              <div className="carousel-caption z-3">
                <h1>VEGETABLES</h1>
                <p>We are interested in selecting the best types of vegetables from the Egyptian fields and freezing them directly to ensure that they retain the minerals and vitamins, and the original nutritional value.</p>
                <button>Discover more</button>
              </div>
  
            </div>
  
          </div>
  
  
          {/* <button className="carousel-control-prev z-3" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          
          </button>
          
          <button className="carousel-control-next z-3" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
    
          </button> */}
  
        </section>
  
        {/* main products */}
  
        <section className='main-products'>
  
          <div className="row p-0 m-0">
  
            <div className="col-md-4 prod position-relative d-flex justify-content-center">
  
              <div className="product-overlay"></div>
              <img className='w-100' src={mainProd1} alt="" />
              <figcaption className=' position-absolute d-flex  align-items-center'>
  
                <div className='prod-caption'>
  
                  <h2>BROCCOLI</h2>
                  <p>Works discount secure</p>
  
                </div>
              </figcaption>
  
            </div>
  
            <div className="col-md-4 prod position-relative d-flex justify-content-center">
              
              <div className="product-overlay"></div>
              <img className='w-100' src={mainProd2} alt="" />
  
              <figcaption className=' position-absolute d-flex  align-items-center'>
  
                <div className='prod-caption'>
  
                  <h2>VEGETABLES</h2>
                  <p>Works discount secure</p>
                  
                </div>
              </figcaption>
  
            </div>
  
            <div className="col-md-4 prod position-relative d-flex justify-content-center mt-0">
  
              <div className="product-overlay"></div>
              <img className='w-100' src={mainProd3} alt="" />
  
              <figcaption className=' position-absolute d-flex  align-items-center'>
  
                <div className='prod-caption'>
  
                  <h2>STRAWBERRY</h2>
                  <p>Works discount secure</p>
                  
                </div>
              </figcaption>
  
            </div>
  
          </div>
  
        </section>
  
  
        {/* Kayan Products */}
        
    
        <section className="kayan-products">
  
          <div className="row p-0 mx-0">
  
            <div className="col-md-5 px-0">
  
              <article>
  
                <h1>Kayan Products <br/> <span>carefully Chosen</span></h1>
                <p>Our experts go around to carefully select our products. We travel to all governorates of Egypt to ensure that we get the perfect product in the perfect way. We care about the quality standards of the product and the quality of its harvesting method as well.</p>
  
              </article>
  
            </div>
  
            <div className="col-md-7 px-0 pt-md-5 products-desc">
              <div className="row p-0 mt-md-5">
                <div className="col-md-6 col-lg-3">
  
                  <figure>
                    <img src= {prod1} alt="BROCCOLI" />
                  </figure>
  
                  <figcaption>
                    <h1>BROCCOLI</h1>
                    <p>Rich in antioxidants that protect cells from damage, contains ample amounts of essential minerals and vitamins. It is carefully selected and packaged in an automated way to ensure that it reaches the consumer in its best condition.</p>
                  </figcaption>
  
                </div>
  
                <div className="col-md-6 col-lg-3">
  
                <figure>
                    <img src= {prod2} alt="MIX VEGETABLES" />
                  </figure>
                  
                  <figcaption>
                    <h1>MIX VEGETABLES</h1>
                    <p>It is a treasure trove of essential vitamins and minerals straight from nature. Fresh vegetables are harvested from the best fields in Egypt and frozen without artificial additives or colors in order to retain their original nutritional value even after cooking.</p>
                  </figcaption>
  
                </div>
  
                <div className="col-md-6 col-lg-3">
  
                  <figure>
                    <img src= {prod3} alt="MANGO" />
                  </figure>
                  
                  <figcaption>
                    <h1>MANGO</h1>
                    <p>Delicious and rich in vitamins and minerals, which are harvested directly from the best farms in Egypt, and classified as one of the best
                        mango varieties in the world. They are prepared and frozen without additives or artificial colors.</p>
                  </figcaption>
  
                </div>
  
                <div className="col-md-6 col-lg-3">
  
                <figure>
                    <img src= {prod4} alt="STRAWBERRY" />
                  </figure>
                  
                  <figcaption>
                    <h1>STRAWBERRY</h1>
                    <p>Delicious and distinctive, which were harvested from the richest fields in Egypt, and the Egyptian strawberries are the best in the world. They are selected with great care, prepared and frozen immediately to preserve their nutritional value. They help you prepare the most delicious desserts and nutrients whenever you like.</p>
                  </figcaption>
                </div>
  
              </div>
            </div>
          </div>
        </section>
  
  
        {/* About Kayan */}
  
  
        <section className="about-kyan position-relative d-flex justify-content-center align-items-center text-white">
          <div className="over-lay"></div>
          <div className="container-xxl d-flex justify-content-center align-items-center z-2 px-0">
  
          <div className="box">
  
            <div className="row">
  
              <div className="col-md-6 mb-0 px-0 pe-md-4  d-flex">
  
              <div className='left'>
  
                <h1>ABOUT KAYAN FROZEN FOOD COMPANY</h1>
  
                <p>At the beginning of the year 2022 AD, Kayan Frozen Food Company was established by a group of food industry experts in Egypt, with a capacity of 30 trained workers, technicians and engineers. The company focuses on the activity of the frozen food industry with the aim of meeting the needs of the Egyptian market, in addition to meeting the growing need of the global markets for luxury Egyptian products.</p>
              
              </div>
  
              </div>
  
              <div className="col-md-6 px-0 ps-md-4 d-flex pt-md-2">
  
                <div className='right'>
  
                  <div className="article">
  
                    <h1>VISION</h1>
                    <p>To become a leading company in the coming years in many countries of the world.</p>
                  
                  </div>
                  
                  <div className="article sp-article">
  
                    <h1>OBJECTIVES</h1>
                    <p>Opening markets all over the world and reaching “Kayan” a global brand required by consumers.</p>
  
                  </div>
  
                  <div className="article sp-article">
  
                    <h1>VALUE</h1>
                    <p>Paying attention to the quality of the product and its quality of manufacture, in order for Kayan to become a competitor to the largest companies in Europe and the Middle East.</p>
                  
                  </div>
                  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
          </div>
  
        </section>
  
  
        {/* Kayan Progress */}
  
        <section className="kyan-progress">
  
          <div className="container-xxl px-0">
  
            <div className="box">
  
              <h1>Kayan Progress</h1>
          
              <div className="row ">
  
                <div className="col-md-3">
                  
                  <img src={prog1} alt="mapImage" />
                  <span className='number' data-goal='35'>0</span>
                  <p><span>Country</span><br/>Our production is exported to</p>
  
                </div>
  
                <div className="col-md-3">
                  
                  <img src={prog2} alt="mapImage" />
                  <span className='number' data-goal='7000'>0</span>
                  <p><span>Tons</span><br/>Production of frozen food annually</p>
  
                </div>
  
                <div className="col-md-3">
                  
                  <img src={prog3} alt="mapImage" />
                  <span className='number' data-goal='6000'>0</span>
                  <p><span>Square Meters</span><br/>Our factory space</p>
  
                </div>
  
                <div className="col-md-3">
                  
                  <img src={prog4} alt="mapImage" />
                  <span className='number' data-goal='5000'>0</span>
                  <p><span>Workers</span><br/>Direct and indirect skilled labor</p>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
  
        </section>
  
  
        {/* slide 1 */}
        <figure className="sliding slide-one">
          <div className="container-xxl px-0">
            <figcaption className="box">
                <h2 >STRAWBERRY</h2>
            </figcaption>
          </div>
        </figure>
  
        {/* slide 2 */}
        <figure className="sliding slide-two">
          <div className="container-xxl px-0">
            <figcaption className="box">
                <h2 >MANGO</h2>
            </figcaption>
          </div>
        </figure>
  
        {/* slide 3 */}
        <figure className="sliding slide-three">
          <div className="container-xxl px-0">
            <figcaption className="box">
                <h2 >MIX VEGETABLES</h2>
            </figcaption>
          </div>
        </figure>
  
        {/* slide 4 */}
        <figure className="sliding slide-four">
          <div className="container-xxl px-0">
            <figcaption className="box">
                <h2 >BROCCOLI</h2>
            </figcaption>
          </div>
        </figure>
        

        {/* Recent-events */}

  
        <section className="recent-events">
  
          <div className="container-xxl px-0">
  
            <div className="box">
  
              <h1>RECENT EVENTS</h1>
  
              <div className="row">
  
                <Link className="col-6 col-md-4 px-0 overflow-hidden">
                  <figure className='position-relative mb-0 d-flex justify-content-center'>
                    <img className='w-100' src={event1} alt="" />
                    <figcaption className='position-absolute z-4 mb-0'>
                      <h3>Post News</h3>
                      <span>December 7, 2022</span>
                    </figcaption>

                  </figure>
  
                </Link>

                <Link className="col-6 col-md-4 px-0 overflow-hidden">
                  <figure className='position-relative mb-0 d-flex justify-content-center'>
                    <img className='w-100' src={event2} alt="" />
                    <figcaption className='position-absolute z-4 mb-0'>
                      <h3>Hello again</h3>
                      <span>December 7, 2022</span>
                    </figcaption>

                  </figure>
                </Link>

                <Link className="col-6 col-md-4 px-0 overflow-hidden">
                  <figure className='position-relative mb-0 d-flex justify-content-center'>
                    <img className='w-100' src={event3} alt="" />
                    <figcaption className='position-absolute z-4 mb-0'>
                      <h3>Hello News</h3>
                      <span>December 7, 2022</span>
                    </figcaption>
                  </figure>
                  
                </Link>
              </div>
  
            </div>
  
          </div>
  
        </section>
  
        
        {/* Partners */}


        <section className="kayan-partners">
  
          <div className="container-xxl px-0">
  
            <div className="box">
  
              <h1>Our Partners</h1>
  
  
            </div>
            <Customers/>
          </div>
  
        </section>
  
        {/* Contact Map & Form */}

        
        <ContactForm/>
  
      </main>
      
    </> 
  )
}

export default Home