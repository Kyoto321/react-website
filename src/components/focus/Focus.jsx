import React from 'react'
import './focus.css'


function Focus() {
  return (
    <div className="focus section__padding" id="focus">
      <div className="focus-heading">
        <h1>Our Area of Focus</h1>
        
        <p>In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab</p>
      </div>
    
      <div className='container-card'>

        <div className="focus-rectangle1">
          <h3>01</h3>
          <p>Business Support & Incubation</p>
        </div>

        <div className="focus-rectangle2">
          <h3>02</h3>
          <p>Ondemand & As-A-Service</p>
        </div>

        <div className="focus-rectangle3">
          <h3>03</h3>
          <p>Marketplace and Crowdsourcing</p>
        </div>

        <div className="focus-rectangle4">
          <h3>04</h3>
          <p>Aggregation and Shared Economy</p>
        </div>

        <div className="focus-rectangle5">
          <h3>05</h3>
          <p>Decentralized Economy and Digital Assets</p>
        </div>

       </div>


    </div>
  )
}

export default Focus