import React from 'react'
import './Payment.css'

function Payment() {
  return (
    <div className='payment'>
      <div className="payment_container">
        <div className="payment_section">
                <div className="payment_title">
                   <h3>Deliver Address</h3> 
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                </div>
        </div>
        <div className="payment_section">
            
        </div>
        <div className="payment_section">
            
        </div>
      </div>
    </div>
  )
}

export default Payment
