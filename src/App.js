import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Checkout from './checkout/Checkout';
import Login from './login/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


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
          
          <Route path="/payment" element={<><Header/><h1>adsfka</h1></> }/>


</Routes>
    </div>  
    </Router>
  );
}



export default App;
