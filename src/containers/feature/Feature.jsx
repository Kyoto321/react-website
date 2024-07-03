import React from 'react'
import './feature.css'
import Features from '../../components/features/Features'
import { featureslide } from "../../data/featuredata";
import './feature.css'


function Feature() {
  return (
    <div className="feature section__padding" id="feature">
      <div className="feature-heading">
        <p>As Featured In</p>
      
    
        <Features data={ featureslide }/>

        <h1>Let's build companies that help everyone succeed</h1>
      </div>

      <div className='feature-signs'>
        <div className="feature-sign-in">
          <button type="button">SINC With Us</button>
        
        </div>
        <div className="feature-sign">
        
          <button type="button">Apply to SIP 1.0 </button>
        </div>
      </div>
          
    </div>


  )
}

export default Feature

