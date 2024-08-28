
import React, { useEffect } from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";

import { BrowserRouter as Router, Route, Routes} 
from "react-router-dom";
import Product from "./Product";
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from "./StateProvider";

function App() {
  const [{},dispatch]= useStateValue();

  useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
        console.log('THE USER IS >>> ', authUser);
        if(authUser){
          //user logged in 
          dispatch({
            type: 'SET_USER',
            user: authUser

          })
        } else {
          // the user is logged out 
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      });
  }, [])
  
  return (
      //BEM
      <Router>
        <div className="app">
          <Routes>
               <Route  path="/login" element={<div><Header/><Login/></div>}></Route>
               <Route  path="/checkout" element={<div><Header/><Checkout/></div>}></Route>
               <Route  path="/" element={<div><Header/><Home/></div>}>
               </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
