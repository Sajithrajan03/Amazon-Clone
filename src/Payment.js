import React, { useEffect, useState } from 'react'
import './Payment.css'
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from 'axios';


function Payment() {
  const [{basket,user},dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [succedded,setSuccedded] = useState(false);
  const [processing,setProcessing] = useState("");
  const [error,setError] = useState(null);
  const [disabled,setDisabled] = useState(true);
  
  // useEffect(() =>{
  //   const getClientSecret = async () =>{
  //     const response = await axios({
  //       method:"post",
  //       url:`/payments/create?total=${getBasketTotal(basket)*100}`
  //     });
  //     // setClientSecret(response.data.clientSecret)
  //   }
  //   getClientSecret();
  // },[basket])
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
            (value) => (
              <h3>Order Total: {value}</h3>
            )
        }

        decimalScale = {2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹ '}
      />
      <button disabled={processing || disabled|| succedded}><span>
        {processing?<p>Processing</p>:"Buy Now"}
      </span>
       </button>
                  </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
