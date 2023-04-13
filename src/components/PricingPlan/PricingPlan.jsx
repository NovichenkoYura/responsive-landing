import React from 'react'
import './pricingPlan.scss'
export const PricingPlan = () => {
  return (
    <div className="pricingPlan flexColumnJustifyBetween" id="pricing">
        <div className='max1170'>
            <div className="pricingPlan-wrap flexColumnJustifyBetween">
                <div className="pricingPlan-heading centerColumn">
                    <h2>Pricing Plan</h2>
                    <p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de
                    standaard proeftekst in deze bedrijfstak sinds.</p> 
                </div>
                <div className='pricingPlan-c-elem center'>
                    <div className="pricingPlan-elem flexColumnJustifyBetween">
                        <h4>BASIC</h4>
                        <span>40</span>
                        <p>Five Website</p>
                        <p>Five User</p>
                        <p>100 GB Bandwidth</p>
                        <p>2 GB Storage</p>
                        <div className=" ">
                            <a href="" className="pricing-btn" >
                                Purchase Now
                            </a>
                        </div>                </div>
                    <div className="pricingPlan-elem flexColumnJustifyBetween">
                        <h4>STANDART</h4>
                        <span>50</span>
                        <p>20 Website</p>
                        <p>20 User</p>
                        <p>200 GB Bandwidth</p>
                        <p>20 GB Storage</p>
                        <div className=" ">
                            <a href="" className="pricing-btn">
                                Purchase Now
                            </a>
                        </div>  
                    </div>
                    <div className="pricingPlan-elem flexColumnJustifyBetween">
                        <h4>UNLIMITED</h4>
                        <span>60</span>
                        <p>Unlimited Website</p>
                        <p>Unlimited Use</p>
                        <p>Unlimited Bandwidth</p>
                        <p>Unlimited Storage</p>
                        
                        <div className=" ">
                            <a href="" className="pricing-btn">
                                Purchase Now
                            </a>
                        </div>  
                    </div>
                </div>
            </div>            
    </div>
    </div>
  )
}
