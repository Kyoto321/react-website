import React from 'react'
import './concept.css'

const Concept = ({ desc, title}) => {
  return (
    <div className="container_concept">
      <div className="container_concept-image">
       
      </div>
      <div className="container_concept-content">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
          
        </div>
      </div>
    </div>
  )
}

export default Concept