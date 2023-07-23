import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG"/>
            <div className='home_row'>
              
              <Product image="https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg"
            title="Samsung 22-inch(54.62cm) FHD Monitor, IPS, 75 Hz,
            Bezel Less Design, AMD FreeSync, Flicker Free, HDMI, D-sub, (LF22T350FHWXXL, Dark Blue Gray)"
            price={9000} rating={4}/>
              <Product image="https://m.media-amazon.com/images/I/61iHq6qV0gL._SL1422_.jpg"
            title="Sony PS5 PlayStation Console+God Of War Ragnarok | Standard Edition | PS5 Game (PlayStation 5)"
            price={58967} rating={5}
            
            />
              

            </div>
            <div className='home_row'>
            
              <Product image="https://m.media-amazon.com/images/I/51Nt6g18p+L._UL1200_.jpg"
              title="SHOEMONKIES Nemo Regular Fit Suede Leather Chukka Boot, Brown, Gray, Tan, Olive Semi Casual Ankle Boot for Men, Suede Chukka Boots for Men"
              price={2499} rating={3}/>
              <Product  title="Do It Today: Overcome procrastination, improve productivity and achieve more meaningful things [Paperback] Foroux, Darius" price={280} 
            image="https://m.media-amazon.com/images/I/61ZPDQOjw-L.jpg"
            rating={5}/>
              
              <Product image="https://m.media-amazon.com/images/I/61uA2UVnYWL._SL1500_.jpg"
              title="Apple 2022 10.9-inch iPad (Wi-Fi, 64GB) - Blue (10th Generation)"
              price={41499} rating={5}
              />

            </div>
            <div className='home_row'>
            
            <Product image="https://m.media-amazon.com/images/I/61QoZCzMx3L._SL1000_.jpg"
              title="Amazon Echo (2nd Gen) - Powered by Dolby – Black"
              price={2999} rating={4}/>

            </div>
        
        
        </div>



    </div>
  )
}

export default Home
