import React from 'react'
import './program.css'
import Eir from '../../components/eir/Eir'
import { pagedata } from "../../data/eirdata";

function Program() {
  return (
    <div className="program">
   
        <h1>Join Our Entrepreneur In Residence (EIR) Program</h1>
        
        <p>Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.</p>
     
    
        <Eir data={ pagedata }/>
    </div>
  )
}

export default Program

