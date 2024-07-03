import React from "react"
import "./footer.css"
import { logo } from './imports'

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container'>
          <div className='left row'>
            <h1>Newsletter</h1>
            <span>Get the latest about SINC Partners, our startup incubator progra, Portfolio companies offerings - straight into your inbox.</span>
          </div>
          <form className="container-form" action=''>
            <div className='form'>
              <input type='text' placeholder='Enter email address' />
              <button className='primary-btn'>Subscribe</button>
            </div>  
          </form>
            <hr />
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
          <img src={logo} alt="logo" /><br/>
          <span>PARTNERS</span>
            <p>SINC Partners is a service incubation company connecting experts in the product development and 
              growth marketing willing to offer their services to amazing startups in exchange for minute equity(usually 0.5% to  2%)</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Platforms</h3>
            <ul>
              <li>Kofoundme</li>
              <li>InResidency</li>
              <li>Service Market</li>
              <li>Founders School</li>
              <li>Metty</li>
              <li>Grantty</li>
              <li>Boldtell</li>
              <li>Chekwa</li>
            </ul>
          </div>

          <div className='box link'>
            <h3>Initiatives</h3>
            <ul>
              <li>Jabi Plains</li>
              <li>Local Pricing Initiative</li>
              <li>Scholaship Programs</li>
              <li>SSMN Pricing</li>
              <li>Unversity STEM</li>
              <li>UNiversity InResidency</li>
              <li>1M Nigeria Products</li>
              <li>Founders Festival</li>
            </ul>
          </div>

          <div className='box link'>
            <h3>About Us</h3>
            <ul>
              <li>Who We Are</li>
              <li>Our People</li>
              <li>Concept Innovations</li>
              <li>Our Process</li>
              <li>Investors Network</li>
              <li>CSR & Events</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className='box link'>
            <h3>More</h3>
            <ul>
              <li>Service</li>
              <li>Equity Jobs</li>
              <li>EIR Program</li>
              <li>Offers</li>
              <li>Innovation Newsletter</li>
              <li>UNiversity InResidency</li>
              <li>1M Nigeria Products</li>
              <li>FOunders Festival</li>
            </ul>
          </div>

          <div className="vertical">
          <div className='box-link'>
          <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                123 Abuja City, F.C.T, Nigeria
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +234801234567
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                wids@gmail.com
              </li>
            </ul>
          </div>
          
          </div>

          
        </div>
      </footer>
      <hr />
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved 
        </p>
      </div>
    </>
  )
}

export default Footer