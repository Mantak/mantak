import React from 'react';

const HomeFeatures = () => {
  return (
    <section className="subsection" id="features">
      <div className="container">
        <div className="row feature_row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 content_anim4">
            <h3>This is your first amazing feature and it's awesome!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center content_anim5 deatures_image" >
            <img src="images/feature_mockup_1.png" alt="" className="img_responsive"/>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center content_anim6 features_image" >
            <img src="images/feature_mockup_2.png" alt="" className="img_responsive"/>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 content_anim7">
            <h3>And this is your second amazing feature!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
