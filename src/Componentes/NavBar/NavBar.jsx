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
            <li className='liGrande'>Sobre Mi</li>
            {/*<NavLink to="/Proyectos">*/}<li className='liGrande'>Proyectos</li>{/*</NavLink>*/}
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