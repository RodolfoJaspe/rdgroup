import React, { useState } from 'react'
import {Link} from 'react-scroll'
import '../styles/Navbar.css';


function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

  return (
    <div className='navbar'>
        <div className={click ? "nav-menu active" : "nav-menu"}>
            <div>
                <Link to='home' className='nav-item' onClick={closeMenu} spy={true} smooth={true} offset={-300} duration={500}>Home</Link>
            </div>
            <div>
                <Link to='about' className='nav-item' onClick={closeMenu} spy={true} smooth={true} offset={-300} duration={500}>About</Link>
            </div>
            <div>
                <Link to='portfolio' className='nav-item' onClick={closeMenu} spy={true} smooth={true} offset={-200} duration={500}>Portfolio</Link>
            </div>
            {/* <div>
                <Link to='videos' className='nav-item' onClick={closeMenu} spy={true} smooth={true} offset={-400} duration={500}>Videos</Link>
            </div> */}
            <div>
                <Link to='contact' className='nav-item' onClick={closeMenu} spy={true} smooth={true} offset={-400} duration={500}>Contact Us</Link>
            </div>
        </div>    
    </div>
  )
}

export default Navbar