import './footer.scss';
export const Footer = () => {
  return (
    <footer className='footer-c  flexColumnJustifyBetween'>
      <div className="max1170">
        <div className="footer-content flexColumnJustifyBetween">
            <div className="footer-contact-c flexJustifyAround">
              <div className="footer-contact-elem center">
                <i className="icofont icofont-phone-circle footer-icon-top"></i>
                <div className="footer-contact-content leftColumn">
                <p>+012 345 678 102</p>
                <p>+012 345 678 102</p>
                </div>
              </div>
              <div className="footer-contact-elem center">
                <i className="footer-icon-top icofont icofont-web"></i>
                <div className="footer-contact-content leftColumn">
                <p>urname@email.com </p>
                <p>urwebsitenaem.com</p>
                </div>
              </div>
              <div className="footer-contact-elem center">
                <i className=" footer-icon-top icofont icofont-google-map"></i>
                <div className="footer-contact-content leftColumn">
                <p>ur address goes here, </p>
                <p>street,Crossroad123.</p>
                </div>
              </div>

            </div>
        <div className="footer-social-c">
          <div className="footer-social-wrap">
            <div className="footer-social-list center">
              <div className="footer-social-elem center">
                  <i className="icofont-facebook footer-icon-social"></i>
              </div>
              <div className="footer-social-elem center">          
                  <i className="icofont-twitter footer-icon-social"></i>
              </div>
              <div className="footer-social-elem center">
                  <i className="icofont-pinterest footer-icon-social"></i>
              </div>
              <div className="footer-social-elem center">
                  <i className="icofont-vimeo footer-icon-social"></i>
              </div>
              <div className="footer-social-elem center">
                  <i className="icofont-google-plus footer-icon-social"></i>
              </div>
            </div>
            <p>Copyright © <span>CodeCarnival.</span> All Rights Reserved.</p>
          </div>
        </div>
        </div>
      </div>

      
    </footer>
  );
};
