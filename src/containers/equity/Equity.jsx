import React from 'react'
import './equity.css'

import card1 from '../../assets/card1.jpg';
import card2 from '../../assets/card2.jpg';
import card3 from '../../assets/card3.jpg';
import card4 from '../../assets/card4.jpg';




function Equity() {
  return (
    <section class="equity">
        <h1>Our Jobs equity</h1>
        <p>See companies and startups offering equity or a mix of cash and equity for very important position in their company</p>

        <div class="row">
            <div class="equity-col">
                <img src={card1} alt="card1" />
                
            </div>


            <div class="equity-col">
                <img src={card2} alt="card2" />
                
            </div>

            <div class="equity-col">
                <img src={card3} alt="card3" />
                
            </div>

            <div class="equity-col">
                <img src={card4} alt="card4" />
                
            </div>
        </div>

      <p className="equity-footer">See more Equity jobs</p>
    </section>
  )
}

export default Equity





