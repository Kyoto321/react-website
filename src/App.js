import React from 'react';
import './App.css'

import { Footer, Network, Cofound, Portfolio, Equity, Sinc, Services, Program, Blog, Feature} from './containers';
import { CTA, Navbar, Carousel, Focus, Innovations } from './components';

import { slides } from "./data/carouselData";
import { pagedata } from './data/eirdata';
import { featureslide } from './data/featuredata';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>

      </div>
      <Carousel data={slides} />
      <CTA/>
      <Network/>
      <Focus />
      <Innovations />
      <Services />
      <Portfolio />
      <Cofound />
      <Sinc />
      <Program data={pagedata}/>
      <Equity />
      <Blog />
      <Feature data={featureslide} />

      <Footer/>
    </div>
  );
}

export default App;