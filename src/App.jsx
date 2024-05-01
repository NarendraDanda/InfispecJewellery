import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import AOS from 'aos';
import "aos/dist/aos.css";
import TopProducts from './Components/TopProducts/TopProducts';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import NewArrivals from './Components/NewArrivals/NewArrivals';
import Ribbon1 from './Components/Ribbon/Ribbon1';
import Ribbon2 from './Components/Ribbon/Ribbon2';

const App = () => {
  
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Ribbon1/>
      <Products/>
      <Banner/>
      <TopProducts/>
      <Ribbon2/>
      <NewArrivals/>
      <Footer/>
    
    </div>
  )
}

export default App
