import React from 'react'
import './CheckoutProduct.css';

import { useStateValue } from './StateProvider';


function CheckoutProduct({id,image,title,price,rating}) {
  const [{basket},dispatch] = useStateValue();
  const removefromBasket = () =>{
    dispatch({
      type:'Remove_from_Basket',
      id: id,
  });
  }
  return (
    <div className='checkoutproduct'>
      <img className="checkoutproduct_img" src={image} alt="" />

    <div className="checkoutproduct_info">
      <p className="checkoutproduct_title">
          {title}
      </p>
      <p className="checkoutproduct_price">
        <small>₹</small>
        <strong> { price}</strong>

      </p>
      <div className="checkoutproduct_rating">
        {
          Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
                    ))
        }
      </div>
      <button onClick={removefromBasket} className="checkoutproduct_btn">Remove from basket</button>
    </div>
    </div>
  )
}

export default CheckoutProduct
