import React from 'react';
import { NavLink } from 'react-router-dom';
import caricatura  from '../../assets/caricatura.png'
import Compu from '../../assets/compu.jpg'
import Idea from '../../assets/idea.jpg'
import './SectionUno.css'
import { motion } from 'framer-motion';

const SectionUno = () => {
 return(
 <div className='sectionUnoCont' id='About'>
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.3}}
    ><h1 className='About'>Sobre Mi</h1></motion.div>
   <div className='tarjetas'>
   <div className="card">
        <div className='face front'>
            <h1>Sofía</h1>
            <img src={caricatura}  className="img"/>
        </div>
        <div className="face back">
            <h1>Sofía</h1>
            <p>Mi nombre es Sofía, tengo 18 años y soy de Rafaela, Santa Fe.
                <span>Soy una persona muy diciplinada, ambiciosa y flexible.</span>
                <span>Me encanta aprender cosas nuevas, y dar el 100% de mi en todo lo que hago.</span>
            </p>
        </div>
   </div>

   <div className="card">
        <div className='face front'>
            <h1>Estudios</h1>
            <img src={Compu}  className="img"/>
        </div>
        <div className="face back">
            <h1>Estudios</h1>
            <p>Soy estudiante de Ingenieri en Sistemas en la UTN de Santa Fe.
                <span>Recientemente recibida de Front End Developer en la UTN de Buenos Aires.</span>
                <span>Tengo conocimientos de JavaScript, HTML, CSS, y C++.</span>
            </p>
        </div>
   </div>


   <div className="card">
        <div className='face front'>
            <h1>Experiencia</h1>
            <img src={Idea}  className="img"/>
        </div>
        <div className="face back">
            <h1>Experiencia</h1>
            <p>Aun no tengo experiencia en este rubro, pero si muchisimas ganas, predispocisión e ideas.
                <span>Si queres ayudarme a ganar experiencia podes contactarme aca</span>
                                
            </p>
            <button className='contacto'>
                    <NavLink to='/Contacto'> Contacto</NavLink>
            </button>
        </div>
   </div>

   </div>


 </div>
 )
}

export { SectionUno }