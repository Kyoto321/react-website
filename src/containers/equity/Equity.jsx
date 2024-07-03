import React from 'react'
import './equity.css'
import { Jobs } from '../../components'
import { card1, card2, card3, card4 } from './imports'


function Equity() {
  return (
    <div clasIName="equity section__padding" id="equity">
      <div className="equity-heading">
        <h1>Our Jobs equity</h1>
        
        <p>See companies and startups offering equity or a mix of cash and equity for very important position in their company</p>
      </div>
      <div className="equity-container">
       
    
          <Jobs
            imgUrl={card1}
        />

          <Jobs  
          imgUrl={card2}
          />

          <Jobs  
            imgUrl={card3}
          
          />

         <Jobs  
            imgUrl={card4}
          
          />
         
        
      </div>

      <p className="equity-footer">See more Equity jobs</p>
    </div>
  )
}

export default Equity





