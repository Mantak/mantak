import React from 'react';

const HomeReviews = () => {
  return (
    <section id="reviews" className="subsection color_bg">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2 content_anim26">
            <div className="owl-carousel align-center">

              <div className="single_review">
                <img src="images/review_01.jpg" alt="" className="img-circle"/>
                <div className="review_content">
                  <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</h6>
                  <p>- Jenny McLane, Microsoft</p>
                </div>
              </div>

              <div className="single_review">
                <img src="images/review_02.jpg" alt="" className="img-circle"/>
                <div className="review_content">
                  <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</h6>
                  <p>- Jahn Kovalsky, Apple</p>
                </div>
              </div>

              <div className="single_review">
                <img src="images/review_03.jpg" alt="" className="img-circle"/>
                <div className="review_content">
                  <h6>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.</h6>
                  <p>- Meggie Patterson, Google</p>
                </div>
              </div>

              <div className="single_review">
                <img src="images/review_04.jpg" alt="" className="img-circle"/>
                <div className="review_content">
                  <h6> Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</h6>
                  <p>- Billy McDillon </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;
