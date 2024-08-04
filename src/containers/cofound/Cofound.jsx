import React from 'react'
import './cofound.css'

import num1 from '../../assets/num1.svg'
import num2 from '../../assets/num2.svg'
import num3 from '../../assets/num3.svg'



function cofound() {
  return (
    <section class="cofound">
      <h1>Co-found With Us</h1>
      <p>We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed.</p>

      <div class="row">
            <div class="cofound-col">
            <img src={num1} alt="num1" />
                <h3>We Ideate</h3>
                <p>
                  We internally generate concepts and ideas that help solve problems 
                  in our thesis areas, after which we proceed to develop a nano/micro MVP 
                  (usually having as low as 30 functions to as high as 100 functions) 
                  of the product that we take to the market.
                </p>
            </div>


            <div class="cofound-col">
                <img src={num2} alt="num2" />
                <h3>We Validate</h3>
                <p>
                  You join our 3 months inResidence program as a business expert 
                  to run the operations or as a technical expert to further the development 
                  and validate the idea with an average monthly revenue of $1k or 10,000 users 
                  and/or an MVP of at least 150 functions 
                </p>
            </div>

            <div class="cofound-col">
                <img src={num3} alt="num3" />
                <h3>We Co-Own</h3>
                <p>
                  After successful validation and demo day at the end of the EIR program, 
                  we move those with perfect fit to become co-founders of the product 
                  they validated as CEO & CTO, each owning 20% of the venture.
                </p>
            </div>
          </div>
   
    </section>
  )
}

export default cofound