import React from 'react';
// import {NavLink} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import './NavBar.css'



const NavBar = () => {
  
 return(
 <div className='NavContainer'>
    
   
   
   <nav className='MenuGrande'>
        
        <ul className='ulGrande'>
            <NavLink to="/" className='liGrande'>Inicio</NavLink>
            <a href="#About"><li className='liGrande'>Sobre Mi</li></a>
            <NavLink to="/Proyectos" className='liGrande'>Proyectos</NavLink>
            <NavLink to="/Contacto" className='liGrande'>Contacto</NavLink>

        </ul>

    
   </nav>

    <div className='redes'>
            <a href="https://www.instagram.com/_sofibolea/"><i className="bi bi-instagram" id='social'></i></a> 
             <a href="https://github.com/SofiaBolea"><i className="bi bi-github" id='social'></i></a>
        </div>
     </div>
 )
}

export { NavBar }