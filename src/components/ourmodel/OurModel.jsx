import React from 'react'
import './ourmodel.css'

const OurModel = ({ imgUrl, desc}) => {
  return (
    <div className="container_model">
      <div className="container_model-image">
        <img src={imgUrl} alt="logo" />
      </div>
      <div className="container_model-content">
        <div>
          
          <p>{desc}</p>
          
        </div>

      </div>
    </div>
  )
}

export default OurModel