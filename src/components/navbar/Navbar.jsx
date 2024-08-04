import { Component} from 'react';
import './navbar.css';

import logo from '../../assets/logoo.jpg'

class Navbar extends Component {
  //state = {clicked: false}

  //handleCLick = () => {
    //this.setState({clicked:
    //!this.state.clicked
   // })
  //}

  render() {
    return (
      <div className="navbar">
        
          <div className="navbar-links" >
            <img src={logo} alt="logo"/>

            <div className="navbar-links_container">
                <p><a href="#">About</a></p>
                <p><a href="#">SIP</a></p>
                <p><a href="#">Studio</a></p>
                
                <div className='more'>
                <p><a href="#">SEEQ</a></p>
                <p><a href="#">Platforms</a></p>
                <p><a href="#">Initiatives</a></p>
                </div>
                <p><a href="#">More</a></p>
              </div> 
          </div>       

          <div className='navbar-button'>
            <div className="navbar-sign-in">
              <button type="button">SINC With Us</button>
            </div>

            <div className="navbar-sign">
              <button type="button">Apply to SIP 1.0 </button>
            </div>
            
          </div>  
       
      </div>
    )
  }
}

export default Navbar