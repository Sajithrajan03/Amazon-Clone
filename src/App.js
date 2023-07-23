import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Checkout from './checkout/Checkout';

function App() {
  return (
    <Router>
    <div className="app">
    <Header />
      <Routes>
        <Route   path="/checkout" element={<>
           <Checkout />
          </>
          }/>
        <Route   path="/" element={<>
           <Home />
          </>
          }/>
          
        


</Routes>
    </div>  
    </Router>
  );
}



export default App;
