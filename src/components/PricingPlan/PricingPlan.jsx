import React from 'react'
import './pricingPlan.scss'
export const PricingPlan = () => {
  return (
    <div className="pricingPlan center " id="pricing">
        <div className='max1170'>
            <div className='pricingPlan-c-elem between'>
                <div className="pricingPlan-elem">
                    <h4>BASIC</h4>
                    <span>40</span>
                    <p>Five Website</p>
                    <p>Five User</p>
                    <p>100 GB Bandwidth</p>
                    <p>2 GB Storage</p>
                    <div className=" ">
                        <a href="" className="pricing__btn">
                            Purchase Now
                        </a>
                    </div>                </div>
                <div className="pricingPlan-elem">
                    <h4>STANDART</h4>
                    <span>50</span>
                    <p>20 Website</p>
                    <p>20 User</p>
                    <p>200 GB Bandwidth</p>
                    <p>20 GB Storage</p>
                    <div className=" ">
                        <a href="" className="pricing__btn">
                            Purchase Now
                        </a>
                    </div>  
                </div>
                <div className="pricingPlan-elem">
                    <h4>UNLIMITED</h4>
                    <span>60</span>
                    <p>asdas</p>
                    <p>asdas</p>
                    <p>asdas</p>
                    <p>asdas</p>
                    <div className=" ">
                        <a href="" className="pricing__btn">
                            Purchase Now
                        </a>
                    </div>  
                </div>

            </div>
    </div>
    </div>
  )
}
