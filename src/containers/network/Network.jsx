import React from 'react'
import './network.css'
import { Article } from '../../components'

function Network() {
  return (
    <div className="network section__padding" id="network">
      <div className="network-heading">
        <h1 >Network of builders helping startup scale</h1>
      </div>
      <div className="network-container">
       
        <div className="network-container_groupB">
          <Article 
            desc="Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.
              
              For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it." 
            
            title="Work with Service Incubators to expedite your time-to-market" 
            
            />

          <Article  
            desc="Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.
              
              Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months " 
              
            title="Access funding after your mvp is validated" 
          
          />
         
        </div> 
      </div>
    </div>
  )
}

export default Network