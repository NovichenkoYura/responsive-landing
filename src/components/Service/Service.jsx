import icon1 from '../../images/service-icon-1.png';
import icon2 from '../../images/service-icon-2.png';
import icon3 from '../../images/service-icon-3.png'
import './service.scss'


export const Service = ()=>{
    return(
        <div className="service center">
            <div className="max1170 ">
                <div className="service-wrap flexColumnJustifyBetween">
                <div className="service-c-elem center">
                    <div className="service-elem flexJustifyAround">                    
                        <div className="service-icon">
                            <img src={icon1} alt="customize" />
                        </div>
                        <div className="service-elem-content leftColumn">
                            <h2 className="service-elem-title">Easy to customize</h2>
                            <p className="service-elem-discription">
                            Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija Lorem Ipsum is de
                            stan.
                            </p>
                        </div>
                    </div>
                    <div className="service-elem between">                    
                        <div className="service-icon">
                            <img src={icon2} alt="customize" />
                        </div>
                        <div className="service-elem-content leftColumn">
                            <h2 className="service-elem-title">Awesome Design</h2>
                            <p className="service-elem-discription">
                            Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija Lorem Ipsum is de
                            stan.
                            </p>
                        </div>
                    </div>
                    <div className="service-elem between">                    
                        <div className="service-icon">
                            <img src={icon3} alt="customize" />
                        </div>
                        <div className="service-elem-content leftColumn">
                            <h2 className="service-elem-title">Easy to Use</h2>
                            <p className="service-elem-discription">
                            Lorem Ipsum is slechts een preksts uit het drukkerij- en zetterija Lorem Ipsum is de
                            stan.
                            </p>
                        </div>
                    </div>
                    </div>
                

                </div>
            </div>
        </div>

    )
}