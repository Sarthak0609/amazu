import React from "react";
import './Home.css';
import Product from './Product';

function Home (){
    return(
        <div className="Home">
            <div className="home__container">
                <img className=
                'home_image' 
                src="orginal_home.jpg" alt="xyz">
                </img>

                <div className="home__row">
                    <Product
                    id='123'
                    title='The lean starup,a brand book for business deals and public comission at the least price ever'
                    price={19.99} 
                    image='The_lean_startup.jpg' 
                    rating={5}/>
                    
                    <Product
                    id="456"
                    title='amazon basics 51-Piece Precision Screwdriver Bit Set, 17.1 X 9.7 X 2.8 Cm, Black'
                    price={70.2}
                    image='screw_amazon.jpg'
                    rating={4}
                    /> 
                </div>

               <div className="home__row">
                    <Product
                    id="789"
                    title='Amazon Brand - Solimo 12-inch Plastic & Glass Wall Clock - Classic Roulette (Silent Movement, Black Frame)'
                    price={34.22}
                    image='clock_amazon.jpg'
                    rating={3}
                    /> 
                    <Product
                    id="012"
                    title='Amazon Brand - Solimo Microfibre Reversible Comforter, Single (Ocean Blue and Mild Blue, 200 GSM)'
                    price={45.34}
                    image='quilt_amazon.jpg'
                    rating={4}
                    /> 

                    <Product
                    id="707"
                    title='Amazon Basics Digital Safe With Electronic Keypad Locker For Home, Gross Capacity - 58L (Net - 51L), Black'
                    price={23.44}
                    image='almirah_amazon.jpg'
                    rating={2}
                    /> 

                </div>

                <div className="home__row">
                    <Product
                    id="998"
                    title='Redmi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV L32MA-FVIN (Black'
                    price={678.56}
                    image='redmi.jpg'
                    rating={5}
                    /> 
                </div>
            

            </div>
        </div>

    )
}

export default Home;