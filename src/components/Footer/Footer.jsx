import './footer.scss';
export const Footer = () => {
  return (
    <footer className='footer-c flexColumnJustifyBetween'>
      <div className="max1170">
        <div className="footer-content flexColumnJustifyBetween">
            <div className="footer-contact-c center">
              <div className="footer-contact-elem center">
                <i class="icofont icofont-phone-circle"></i>
                <div className="footer-contact-content leftColumn">
                <p>+012 345 678 102</p>
                <p>+012 345 678 102</p>
                </div>
              </div>
              <div className="footer-contact-elem center">
                <i class="icofont icofont-web"></i>
                <div className="footer-contact-content leftColumn">
                <p>urname@email.com </p>
                <p>urwebsitenaem.com</p>
                </div>
              </div>
              <div className="footer-contact-elem center">
                <i class="icofont icofont-google-map"></i>
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
                  <i className="icofont-facebook"></i>
              </div>
              <div className="footer-social-elem center">          
                  <i className="icofont-twitter"></i>
              </div>
              <div className="footer-social-elem center">
                  <i className="icofont-pinterest"></i>
              </div>
              <div className="footer-social-elem center">
                  <i className="icofont-vimeo"></i>
              </div>
              <div className="footer-social-elem center">
                  <i className="icofont-google-plus"></i>
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
