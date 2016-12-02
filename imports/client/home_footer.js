import React from 'react';

const HomeFooter = () => {
  return (
    <section id="footer" className="subsection color_bg">
      <div className="container" >
        <div className="row ">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 outher">
            <img src="images/logo.png" alt="logo" className="logo inner"/>
            <p className="inner">© Copyright 2015</p>
            <p className="float-right inner  visible-lg visible-md">Call us <strong>1.800.439.7656</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFooter;
