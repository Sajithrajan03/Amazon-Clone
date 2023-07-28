import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from '../CheckoutProduct';
import { ListItemAvatar } from '@mui/material';

function Checkout() {
    const [{basket,user},dispatch] = useStateValue();
    {basket.map(item => (
        console.log(item.title)
    ))}
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
            <div>
                <div className="toptitle">
                <h2>Hello , {user?.email}!</h2>
                <h1 className="checkout_title">
                    Your Shoping Basket
                </h1>
                </div>
{basket.map(item => (
    
    <CheckoutProduct id ={item.id} title = {item.title} 
    image= {item.image} 
    price= {item.price}
    rating = {item.rating}
    />
))}



            </div>

        </div>

        <div className='checkout_right'>

            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout
