import './funfacts.scss';

export const FunFacts = () => {
  return (
    <div className="funfacts center" >
      <div className="max1170">
        <div className="funfacts-c-elem between">
          <div className="funfacts-elem ">
            <div className="funfacts-elem-content centerColumn">
              <h2 className="funfacts-elem-counter">200</h2>
              <h5 className="funfacts-elem-singlefact">Downloads</h5>
            </div>
          </div>
          <div className="funfacts-elem">
            <div className="funfacts-elem-content centerColumn">
              <h2 className="funfacts-elem-counter">1000</h2>
              <h5 className="funfacts-elem-singlefact">Active Installs</h5>
            </div>
          </div>
          <div className="funfacts-elem">
            <div className="funfacts-elem-content centerColumn">
              <h2 className="funfacts-elem-counter">80</h2>
              <h5 className="funfacts-elem-singlefact">Happy Clients</h5>
            </div>
          </div>
          <div className="funfacts-elem">
            <div className="funfacts-elem-content centerColumn">
              <h2 className="funfacts-elem-counter">100</h2>
              <h5 className="funfacts-elem-singlefact">Total App Rat</h5>
            </div>
          </div>         
        </div>
      </div>
    </div>
  );
};
