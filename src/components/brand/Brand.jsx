import React from 'react'
import './brand.css'

const Brand = ({ title, imgUrl, desc}) => {
  return (
    <div className="container_brand">
      <div className="container_brand-image">
        <img src={imgUrl} alt="logo" />
      </div>
      <div className="container_brand-content">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
          
        </div>

      </div>
    </div>
  )
}

export default Brand