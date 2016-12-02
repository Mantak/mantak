import React from 'react';

const HomeFeatures = () => {
  return (
    <section id="more_info" className="subsection darker_bg align-center ">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div className="iconbox content_anim1">
              <div data-icon="&#xe046;" className="iconbox_icon"></div>
              <div className="iconbox_content">
                <h5>First Feature</h5>
                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do tempor incididunt dolore.</p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div className="iconbox content_anim2">
              <div data-icon="&#xe061;" className="iconbox_icon"></div>
              <div className="iconbox_content">
                <h5>Second Feature</h5>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu pariatur.</p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div className="iconbox content_anim3">
              <div data-icon="&#xe07b;" className="iconbox_icon"></div>
              <div className="iconbox_content">
                <h5>Third Feature</h5>
                <p>Excepteur sint occaecat cupidatat non proptate velit ident, sunt in culpa qui officia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
