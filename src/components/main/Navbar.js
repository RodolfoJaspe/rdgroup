import React, { useState } from 'react'
import {Link} from 'react-scroll'
import '../../styles/main/Navbar.css';


function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

  return (
    <div className='navbar'>
        <div className={click ? "nav-menu active" : "nav-menu"}>
            <div>
                <Link to='home' className='nav-item' onClick={closeMenu} spy={true} smooth={true} offset={0} duration={1500}>H o m e</Link>
            </div>
            <div>
                <Link to='portfolio' className='nav-item' onClick={closeMenu} spy={true} smooth={true} offset={0} duration={1500}>P o r t f o l i o</Link>
            </div>
            <div>
                <Link to='about' className='nav-item' onClick={closeMenu} spy={true} smooth={true} offset={0} duration={1500}>A b o u t</Link>
            </div>
            <div>
                <Link to='contact' className='nav-item' onClick={closeMenu} spy={true} smooth={true} offset={0} duration={1500}>c o n t a c t</Link>
            </div>
        </div>    
    </div>
  )
}

export default Navbar