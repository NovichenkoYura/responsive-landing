import './subscribeform.scss'

export const SubscribeForm = () =>{
    return(
        <div className="subscribeForm-c center header_elem">
            <div className="max1170">
            <div className="subscribeForm-wrap  flexColumnJustifyBetween ">

                <div className="subscribeForm-heading flexColumnJustifyBetween">
                    <h2>Subscribe A Free Update</h2>
                    <p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de
							standaard proeftekst in deze bedrijfstak sinds.</p>
                </div>
                <form className='center subscribeForm-form '>
                    <input placeholder="Enter Your Email" type="text" />
                    <button type="submit" >Subscribe</button>
                </form>              

            </div>

            </div>
        </div>
    )
}