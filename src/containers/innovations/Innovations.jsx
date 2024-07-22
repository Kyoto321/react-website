import React from 'react'
import './innovations.css'


function Innovations() {
  return (
    <section class="innovation">
        <h1>Our Concept Innovations</h1>
        <p>We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success</p>

        <div class="row">
            <div class="innovation-col">
                <h3>Service Incubator</h3>
                <p>
                  A service-for-shares model of incubating pre-product startups 
                  and early-stage companies by building their early stage product and MVP.
                </p>
            </div>

            <div class="innovation-col">
                <h3>Virtualting</h3>
                <p>
                  A resource share model that allows companies share the time of resources 
                  (employees, consultants, technical advisers or influencers) 
                   while also splitting the service cost of the resource
                </p>
            </div>

            <div class="innovation-col">
                <h3>Diming</h3>
                <p>
                  A progressive investment model that allows you to put aside income (
                  disposable or non-disposable) as investment over a period towards an investment or spend of your choice.
                </p>
            </div>
        </div>
    </section>

  )
}

export default Innovations