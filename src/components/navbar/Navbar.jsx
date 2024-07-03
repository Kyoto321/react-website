import { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logoo.jpg'

const Menu = () => (
  <>
    <p><a href="#">About</a></p>
    <p><a href="#">SIP</a></p>
    <p><a href="#">Studio</a></p>
    <p><a href="#">SEEQ</a></p>
    <p><a href="#">Platforms</a></p>
    <p><a href="#">Initiatives</a></p>
    <p><a href="#">More</a></p>
  </>
)

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      
       <div className="navbar-sign-in">
        <button type="button">SINC With Us</button>
       
      </div>
      <div className="navbar-sign">
       
        <button type="button">Apply to SIP 1.0 </button>
      </div>

     
      <div className="navbar-menu">
      {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
              <div className="navbar-menu__container-links-sign-in">
                <button className="button">SINC With Us</button>
                <button className="button">Apply to SIP 1.0</button>
              </div>

              <div className="navbar-menu__container-links-sign">
               
                <button className="button">Apply to SIP 1.0</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar


