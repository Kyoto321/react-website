import React from 'react';
import './App.css'

import {Network, Innovations, Services, Portfolio, Cofound, Sinc, Program, Equity, Blog, Feature, Footer} from './containers';
import {Navbar, Intro, CTA, Focus, } from './components';

import { pagedata } from './data/eirdata';
import { featureslide } from './data/featuredata';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>

      </div>
      <Intro />
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