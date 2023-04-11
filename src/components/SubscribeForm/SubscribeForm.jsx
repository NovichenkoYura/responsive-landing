import './subscribeform.scss'

export const SubscribeForm = () =>{
    return(
        <div className="subscribeForm-c ">
            <div className="max1170">
            <div className="subscribeForm-wrap  ">

                <div className="subscribeForm-heading ">
                    <h2>Subscribe A Free Update</h2>
                    <p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de
							standaard proeftekst in deze bedrijfstak sinds.</p>
                </div>
                <div className="subscribeForm-form ">
                    <form>
                    <input placeholder="Enter Your Email" type="text" />
                    <button type="submit" >Subscribe</button>
                    </form>
                </div>
                


            </div>


            </div>
        </div>
    )
}