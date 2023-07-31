import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Checkout from './checkout/Checkout';
import Login from './login/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51NZAGzSF7y1IIa3MqZCrdFzK8XeWosApzdRznfrvW0oU4taRFnwv23RpDTe5zuEPRxr7MQ2HrpXy1hskZccNvjyn00jJLuvGMd");

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if(authUser){
        dispatch({
          type:"SET_USER",
          user: authUser
        })
    } else{
      dispatch({
        type:"SET_USER",
        user: null
      })
    }
  }

  )
},[])
  return (
    <Router>
    <div className="app">
    
      <Routes>
        <Route   path="/checkout" element={<>
          <Header />
           <Checkout />
          </>
          }/>
        <Route   path="/" element={<>
          <Header />
           <Home />
          </>
          }/>
          <Route path="/login" element={<Login/>}/>
          
          <Route path="/payment" element={<><Header/>
         <Elements stripe={promise}> 
          <Payment />
          </Elements>
          </> }/>


</Routes>
    </div>  
    </Router>
  );
}



export default App;
