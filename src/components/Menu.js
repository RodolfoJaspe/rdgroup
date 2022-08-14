import React,{useState} from 'react';
import Navbar from './Navbar';
import menu from "../Assets/icons/menu.png";
import close from "../Assets/icons/close.png";
import "../styles/Menu.css";
import "../styles/Navbar.css";
import {Link} from 'react-scroll'

export default function Menu() {

    const [menuClosed, setMenuClosed] = useState(true);

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

  return (
    <div className='menu'>
        <div 
            className='menu-icon'
            onClick={() => setMenuClosed(!menuClosed)}>
            {menuClosed?
                <div className='menu-button-div'>
                    <img src={menu} className='menu-button'/>
                </div>
                : 
                <img src={close} className='close-button'/>
            }
        </div>
        {!menuClosed ? 
        <div className='menu-open'>
            <div className={click ? "items active" : "items"}>
                <div>
                    <Link to='home' className='item' onClick={closeMenu} spy={true} smooth={true} offset={0} duration={500}>H o m e</Link>
                </div>
                <div>
                    <Link to='portfolio' className='item' onClick={closeMenu} spy={true} smooth={true} offset={0} duration={1500}>P o r t f o l i o</Link>
                </div>
                <div>
                    <Link to='about' className='item' onClick={closeMenu} spy={true} smooth={true} offset={0} duration={1500}>A b o u t</Link>
                </div>
                <div>
                    <Link to='contact' className='item' onClick={closeMenu} spy={true} smooth={true} offset={0} duration={1500}>c o n t a c t</Link>
                </div>
            </div>    
        </div> : null}
    </div>
  )
}
