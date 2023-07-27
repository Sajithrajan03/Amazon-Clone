import React from 'react'

function CheckoutProduct(id,image,title,price,rating) {
  return (
    <div className='checkoutproduct'>
      <img className="checkoutproduct_img"src={image} alt="" />

    <div className="checkoutproduct_info">
      <p className="checkoutproduct_title">
          {title}
      </p>
      <p className="checkoutproduct_price">
        <small>rs</small>
        <strong>{price}</strong>

      </p>
      <div className="checkoutproduct_rating">
        {
          Array(rating)
          .fill()
          .map((_, i) => (
                      <i className="fas fa-star"></i>
                    ))
        }
      </div>
      <button className="checkoutproduct_btn">Remove from basket</button>
    </div>
    </div>
  )
}

export default CheckoutProduct
