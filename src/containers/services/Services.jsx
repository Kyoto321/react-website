import React from 'react'
import './services.css'
import { OurModel } from '../../components'
import { shape1, shape2, shape3 } from './imports'


function Services() {
  return (
    <div className="services section__padding" id="">
      <div className="services-heading">
        <h1>Our Service Incubation Model</h1>

        <p>The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.</p>
      </div>

      <div className='services-text'>
        <h3><strong>Hypothesis</strong></h3>

        <p>Just a few reasons we know its time for this model within the ecosystem</p>

      </div>

      <div className="services-container">
       
        <div className="services-container_groupB">

          <OurModel

            imgUrl={shape1}

            desc="Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ services that can support" 
                       
            />

          <OurModel 

            imgUrl={shape2}

            desc="If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment" 
                     
          />

          <OurModel
        
            imgUrl={shape3}

            desc="Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return"
        />

        </div> 
      </div>

      <div>
        
        <div className='services-text'>
          <h3><strong>Case Study</strong></h3>
            <p>See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time</p>
        </div>

        <div className='container-card'>
            <div className='card'>
                <button type="button">Service Incubator Equity</button>
                <button type="button">SEEQ Math Equation</button>
                <button type="button">Value of My Equity Over Time</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services