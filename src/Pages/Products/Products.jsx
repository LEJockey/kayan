import React from 'react'
import './Products.css'
import product1 from '../../assests/products/product 1.jpg'
import product2 from '../../assests/products/product 2.jpg'
import product3 from '../../assests/products/product 3.jpg'
import product4 from '../../assests/products/product 4.jpg'
import product5 from '../../assests/products/product 5.jpg'
import product6 from '../../assests/products/product 6.jpg'
import product7 from '../../assests/products/product 7.jpg'
import product8 from '../../assests/products/product 8.jpg'
import product9 from '../../assests/products/product 9.jpeg'

const Products = () => {
  return (

    <>

      <div className="section-bg">
        
        <div className="overlay"></div>

        <div className='section-content'>

          <div className="section-head text-white">

            <h1>OUR PRODUCTS</h1>

            <h2>Carefully Chosen</h2>
          </div>

        </div>

      </div>
      
      <section className='products'>

        {/* Product 1 */}

        <div className="box-container d-flex justify-content-center bg-silver">

        <div className="box">

          <div className="row">

            <figure className="col-md-6 mb-0 d-flex justify-content-center">

              <img src= {product1} alt="STRAWBERRY" />

            </figure>

            <figcaption className="col-md-6 d-flex align-items-center">

              <div>

                <h1>STRAWBERRY</h1>

                <p>Delicious and distinctive, which were harvested from the richest fields in Egypt, and the Egyptian strawberries are the best in the world. They are selected with great care, prepared and frozen immediately to preserve their nutritional value. They help you prepare the most delicious desserts and nutrients whenever you like.</p>

              </div>

            </figcaption>

          </div>

        </div>

        </div>

        {/* Product 2 */}

        <div className="box-container d-flex justify-content-center ">

        <div className="box">

          <div className="row">

            <figure className="col-md-6 mb-0 d-flex justify-content-center">

              <img src= {product2} alt="MANGO" />

            </figure>

            <figcaption className="col-md-6 d-flex align-items-center">

              <div>

                <h1>MANGO</h1>

                <p>Delicious and rich in vitamins and minerals, which are harvested directly from the best farms in Egypt, and classified as one of the best mango varieties in the world. They are prepared and frozen without artificial additives or colors.</p>

              </div>

            </figcaption>

          </div>

        </div>

        </div>

        {/* Product 3 */}

        <div className="box-container d-flex justify-content-center bg-silver">

        <div className="box">

          <div className="row">

            <figure className="col-md-6 mb-0 d-flex justify-content-center">

              <img src= {product3} alt="CARROTS AND PEAS" />

            </figure>

            <figcaption className="col-md-6 d-flex align-items-center">

              <div>

                <h1>CARROTS AND PEAS</h1>

                <p>It is a treasure trove of essential vitamins and minerals straight from nature. Fresh vegetables are harvested from the best fields in Egypt and frozen without artificial additives or colors in order to retain their original nutritional value even after cooking.</p>

              </div>

            </figcaption>

          </div>

        </div>

        </div>

        {/* Product 4 */}

        <div className="box-container d-flex justify-content-center">

        <div className="box">

          <div className="row">

            <figure className="col-md-6 mb-0 d-flex justify-content-center">

              <img className='product4' src= {product4} alt="BROCCOLI" />

            </figure>

            <figcaption className="col-md-6 d-flex align-items-center">

              <div>

                <h1>BROCCOLI</h1>

                <p>Rich in antioxidants that protect cells from damage, contains ample amounts of essential minerals and vitamins. It is carefully selected and packaged in an automated way to ensure that it reaches the consumer in its best condition.</p>

              </div>

            </figcaption>

          </div>

        </div>

        </div>

        {/* Product 5 */}

        <div className="box-container d-flex justify-content-center bg-silver">

        <div className="box">

          <div className="row">

            <figure className="col-md-6 mb-0 d-flex justify-content-center">

              <img src= {product5} alt="MULUKHIYAH" />

            </figure>

            <figcaption className="col-md-6 d-flex align-items-center">

              <div>

                <h1>MULUKHIYAH</h1>

                <p>Rich in antioxidants that protect cells from damage, contains ample amounts of essential minerals and vitamins. It is carefully selected and packaged in an automated way to ensure that it reaches the consumer in its best condition.</p>

              </div>

            </figcaption>

          </div>

        </div>

        </div>

        {/* Product 6 */}

        <div className="box-container d-flex justify-content-center">

        <div className="box">

          <div className="row">

            <figure className="col-md-6 mb-0 d-flex justify-content-center">

              <img src= {product6} alt="OKRA" />

            </figure>

            <figcaption className="col-md-6 d-flex align-items-center">

              <div>

                <h1>OKRA</h1>

                <p>Rich in antioxidants that protect cells from damage, contains ample amounts of essential minerals and vitamins. It is carefully selected and packaged in an automated way to ensure that it reaches the consumer in its best condition.</p>

              </div>

            </figcaption>

          </div>

        </div>

        </div>

        {/* Product 7 */}
        <div className="box-container d-flex justify-content-center bg-silver">

        <div className="box">

          <div className="row">

            <figure className="col-md-6 mb-0 d-flex justify-content-center">

              <img src= {product7} alt="CAULIFLOWER" />

            </figure>

            <figcaption className="col-md-6 d-flex align-items-center">

              <div>

                <h1>CAULIFLOWER</h1>

                <p>Rich in antioxidants that protect cells from damage, contains ample amounts of essential minerals and vitamins. It is carefully selected and packaged in an automated way to ensure that it reaches the consumer in its best condition.</p>

              </div>

            </figcaption>

          </div>

        </div>

        </div>

        {/* Product 8 */}
        <div className="box-container d-flex justify-content-center">

        <div className="box">
          <div className="row">

            <figure className="col-md-6 mb-0 d-flex justify-content-center">

              <img src= {product8} alt="SPINACH" />

            </figure>

            <figcaption className="col-md-6 d-flex align-items-center">

              <div>

                <h1>SPINACH</h1>

                <p>Rich in antioxidants that protect cells from damage, contains ample amounts of essential minerals and vitamins. It is carefully selected and packaged in an automated way to ensure that it reaches the consumer in its best condition.</p>

              </div>

            </figcaption>

          </div>

        </div>

        </div>

        {/* Product 9 */}

        <div className="box-container d-flex justify-content-center bg-silver">

        <div className="box">

          <div className="row">

            <figure className="col-md-6 mb-0 d-flex justify-content-center">

              <img src= {product9} alt="POMMES FRITES" />

            </figure>

            <figcaption className="col-md-6 d-flex align-items-center">

              <div>

                <h1>POMMES FRITES</h1>

                <p>Kayan pomme frites made with 100% sunflower oil. tasty and delicious snacks. Kayan pomme frites is tasty and delicious snacks with trans fat free and the result is a truly tasty French fry with an unbeatable crispy crunch.</p>

              </div>

            </figcaption>

          </div>

        </div>

        </div>


      
    </section>
    
    </>
  )
}

export default Products