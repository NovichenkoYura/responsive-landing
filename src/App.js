import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { PricingPlan } from './components/PricingPlan/PricingPlan';
import { Service } from './components/Service/Service';
import { FunFacts } from './components/FunFacts/FunFacts';
import { Client } from './components/Client/Client';
import { Team } from './components/Team/Team';
import { SubscribeForm } from './components/SubscribeForm/SubscribeForm';
import { Footer } from './components/Footer/Footer';
import { Features } from './components/Features/Features';

function App() {
  const [isHeader, setHeader] = useState(false)
  const [top, setTop] = useState(false)

  const scrollTopClick = (e) => {
    window.scroll({top:0,behavior : 'smooth'})
  }

  useEffect(()=>{
// const headers_a = document.querySelectorAll('header .link')
// const elem_for_a = document.querySelectorAll('.header_elem')
// console.log(elem_for_a[1]);

    window.onscroll = e => {
      const scrollTop = window.pageYOffset;
      if(scrollTop > 0) {
        isHeader === false && setHeader(true)
      } else {
        setHeader(false)
      }

      if(scrollTop > 200){
        setTop(true)
      } else {
        setTop(false)
      }



      
    }
  },[])
  return (
    <div className="App">
      <Header isHeader={isHeader}/>
      <Hero/>
      {/* <Service /> */}
      {/* <Features/> */}
      <FunFacts/>
      <PricingPlan/>
      <Client/>
      <Team/>
      <SubscribeForm/>
      <Footer/> 
     
     {top && <div onClick={scrollTopClick} className='btnTop'>
     <i className="icofont-rounded-up"></i></div>}
     {/* {top && <a href='#top' className='btnTop'>
      $</a>} */}




  
    </div>
  );
}

export default App;
