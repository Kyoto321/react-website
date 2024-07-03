import React from 'react'
import './cofound.css'
import { Brand } from '../../components'
import { num1, num2, num3 } from './imports'


function Cofound() {
  return (
    <div className="cofound section__padding" id="">
      <div className="cofound-heading">
        <h1>Co-found With Us</h1>

        <p>We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed.</p>
      </div>


      <div className="cofound-container">
       
        <div className="cofound-container_groupB">

          <Brand

            imgUrl={num1}

            title="We Ideate"

            desc="We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market." 
                       
            />

          <Brand 

            imgUrl={num2}

            title="We Validate"

            desc="You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions " 
                     
          />

          <Brand
        
            imgUrl={num3}

            title="We Co-Own"

            desc="After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture."
        />

        </div> 
      </div>

    </div>
  )
}

export default Cofound