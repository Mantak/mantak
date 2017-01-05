import React from 'react';

import Hero from './hero';
import Usecases from './usecases';
import Features from './features';
import Screenshots from './screenshots';
import Reviews from './reviews';
import FAQ from './faq';
import Footer from './footer';

class LandingPage extends React.Component {
  render() {
    return (
      <div id="landing" className="up">
        <Hero/>
        <Features/>
        <Usecases/>
        <Screenshots/>
        <Reviews/>
        <FAQ/>
        <Footer/>
      </div>
    );
  }
}

export default LandingPage;
