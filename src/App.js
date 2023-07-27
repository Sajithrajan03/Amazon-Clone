import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Checkout from './checkout/Checkout';
import Login from './login/Login';

function App() {
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
          
        


</Routes>
    </div>  
    </Router>
  );
}



export default App;
