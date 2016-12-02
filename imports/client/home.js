import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import HomeHeader from './home_header';
// import HomeHero from './home_hero';
import HomeScenarios from './home_scenarios';
import HomeFeatures from './home_features';
import HomeScreenshots from './home_screenshots';
import HomeReviews from './home_reviews';
import HomeFAQ from './home_faq';
import HomeFooter from './home_footer';


const home = () => {
  return (
    <div>
      <HomeHeader/>
      <HomeFeatures/>
      <HomeScenarios/>
      <HomeScreenshots/>
      <HomeReviews/>
      <HomeFAQ/>
      <HomeFooter/>
    </div>
  );
};

export default home;
