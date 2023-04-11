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

function App() {
  const [isHeader, setHeader] = useState(false)
  useEffect(()=>{
    window.onscroll = e => {
      const scrollTop = window.pageYOffset;
      if(scrollTop > 0) {
        isHeader === false && setHeader(true)
      } else {
        setHeader(false)
      }
      
    }
  },[])
  return (
    <div className="App">
      <Header isHeader={isHeader}/>
      <Hero/>
      <PricingPlan/>
      {/* <Service /> */}
      <FunFacts/>
      <Client/>
      {/* <Team/> */}
      <SubscribeForm/>
      

      {/* <div className='test'></div> */}
    <div className='block'></div>

    
    </div>
  );
}

export default App;
