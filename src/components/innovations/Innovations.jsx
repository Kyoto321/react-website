import React from 'react'
import './innovations.css'
import { Concept } from '../../components'


function Innovations() {
  return (
    <div clasIName="innovations section__padding" id="innovations">
      <div className="innovations-heading">
        <h1>Our Concept Innovations</h1>
        
        <p>We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success</p>
      </div>
      <div className="innovations-container">
       
        <div className="innovations-container_groupB">
          <Concept 
            desc="A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP." 
            
            title="Service Incubator" 
            
            />

          <Concept  
            desc="A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource" 
              
            title="Virtualting" 
          
          />

          <Concept  
            desc="A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice." 
              
            title="Diming" 
          
          />
         
        </div> 
      </div>
    </div>
  )
}

export default Innovations