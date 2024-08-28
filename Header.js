import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

function Header(){
    const[{ basket, user }, dispatch]= useStateValue();
    const handleAuthentication = ()=>{
      if (user){
        auth.signOut();
      }
    }
    
    return (
      <div className='header'>
        <Link to="/">
          <img 

          className='header__logo'
          src="amazon_PNG11.png" alt="xyz"

          />

        </Link>

        <div className='header__search'>

            <input className='header__searchInput' 
            type='text' />

            <img  
            className='header__searchIcon' src='search_icon.png'/>

        </div>

        <div className='header__nav'>
          <Link to={!user && '/login'}>
          <div onClick={handleAuthentication}
          className='header__option'>
            <span className='header__optionLineOn
            e'>Hello Guest</span>
            <span className='header__optionLineTw
            o'> {user ? 'Sign out' : 'Sign In'} </span>
          </div>
          </Link>
          

          <div className='header__option'>
            <span className='header__optionLineOn
            e'>Returns </span>
            <span className='header__optionLineTw
            o'>& Orders</span>
          </div>

          <div className='header__option'>
            <span className='header__optionLineOn
            e'> Your </span>
            <span className='header__optionLineTw
            o'>Prime</span>
          </div>

          <Link to='/checkout'>
           <div className='header__optionBasket'>
             <img className='header__basket' src='basket.png'/>
             <span className='header__optionLineTwo 
             header__basketCount'>
              {basket?.length}
             </span>
           </div>
          </Link>

        </div>
      </div>
    );
}

export default Header;