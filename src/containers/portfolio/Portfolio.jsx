import React from 'react'
import './portfolio.css'

import portfolio from '../../assets/portfolio.jpg'


function Portfolio() {
  return (
    <div className="portfolio section__padding" id="">
      <div className="portfolio-heading">
        <h1>Our Studio and Portfolio</h1>

        <p>Our 2024 Service Incubator Portfolio Companies.</p>
      </div>


      <div className="portfolio-container">

        <img src={portfolio} alt='logo' />
       
      </div>

    </div>
  )
}

export default Portfolio