import React, { useState } from 'react';
import './MenuMobile.css'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
const MenuMobile = () => {
    const [burger_class, setBurgerClass]=useState("buger-bar unclicked")
    const [menu_class, setMenuClass]=useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked]=useState(false)

    const update=()=>{
        if  (isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

 return(

  
 <div className='mobileContainer'>

    
    <nav className='MenuMobile'>
        <div className="burger-menu"  onClick={update} >

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={burger_class} viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
            
        </div>
     </nav>

        <motion.div className={menu_class} 
       
        >


            <ul className='ulMB'>
                <NavLink to="/" className='liMB'>Inicio</NavLink>
                <a href="#About"><li className='liMB'>Sobre Mi</li></a>
                <NavLink to="/Proyectos" className='liMB'>Proyectos</NavLink>
                <NavLink to="/Contacto" className='liMB'>Contacto</NavLink>
                <div className='social'>
                <a href="https://www.instagram.com/_sofibolea/"><i className="bi bi-instagram" id='social'></i></a>
                <a href="https://github.com/SofiaBolea"><i className="bi bi-github" id='social'></i></a>
                </div>
            </ul>
             
        </motion.div>
    
 </div>
 )
}

export { MenuMobile }