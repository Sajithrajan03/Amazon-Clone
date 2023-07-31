import React, { useState } from 'react'
import './Payment.css'
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js';

function Payment() {
  const [{basket,user},dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [error,setError] = useState(null);
  const [disabled,setDisabled] = useState(true);
  const handleSubmit = e => {
    e.preventDefault();
     
  }

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message: "");
  }

  return (
    <div className='payment'>
      <div className="payment_container">
        <h1>
          Checkout ( <Link to="/checkout">{basket?.length} items</Link>  
          )
        </h1>
        <div className="payment_section">
                <div className="payment_title">
                   <h3>Deliver Address</h3> 
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>Number 6   </p>
                    <p>Vivekanadar theru</p>
                    <p>Dubai kurukku sandhu</p>
                    <p>Dubai main road, Dubai</p>
                </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and Delivery</h3>

          </div>
            <div className="payment_items">
              {basket.map(item => (
                <CheckoutProduct id ={item.id} title = {item.title} 
                image= {item.image} 
                price= {item.price}
                rating = {item.rating}
                />
              
              ))}
            </div>
        </div>
        <div className="payment_section">
            <div className="payment_title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment_details">
                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange}/>
                  <div className="price_container">
                  <CurrencyFormat
        renderText = {
            (value) => {
              <h3>Order Total: {value}</h3>
            }
        }

        decimalScale = {2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹ '}
      />
                  </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
