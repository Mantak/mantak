import React from 'react';

const HomeHero = () => {
  return (
    <section className="hero_fullscreen background_solid">
      <div className="container" >
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 outher">
            <img src="images/logo.png" alt="logo" className="logo inner"/>
            <div className="inner float-right"><p >Call us <strong>1.800.439.7656</strong></p></div>
          </div>
        </div>
      </div>
      <div className="container align-center" id="main_content">
        <div className="content_container row" >
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  home_content">
            <h2 className="slogan">A very clear statement of your offer.</h2>
            <h6>
              A supporting statement of your value proposition. Entive your visitor to keep reading
              <br/>
              the heigh level details of your offering.
            </h6>

            <div className="cta_button_area">
              <div><button className="btn waves-effect waves-light subscribe-submit">Cta button</button></div>
            </div>

            <div className="home_mockups align-center">
              <img src="images/home_mockups_3.png" alt="" className="img_responsive home_mockups_3"/>
              <img src="images/home_mockups_2.png" alt="" className="img_responsive home_mockups_2"/>
              <img src="images/home_mockups_1.png" alt="" className="img_responsive home_mockups_1"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
