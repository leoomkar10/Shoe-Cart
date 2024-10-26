import React from 'react'
import './Products.css'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

const Products = () => {
  return (
    <>
      <section className='card-container'>
        <section className='card'>
          <img src="https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg" alt="Shoe" className='card-img'/>
          <div className='card-details'>
            <h3 className="card-title">
              Show
            </h3>
            <section className="card-reviews">
              <AiFillStar className='rating-star'/><AiFillStar className='rating-star'/><AiFillStar className='rating-star'/><AiFillStar className='rating-star'/>
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
                <div className="price">
                  <del>$300</del>200
                </div>
                <div className="bag">
                  <BsFillBagHeartFill className='bag-icon'/>
                </div>
            </section>
          </div>
        </section>
      </section>
      
    </>
  )
}

export default Products