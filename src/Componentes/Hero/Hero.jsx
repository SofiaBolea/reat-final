// import React from 'react';
import imagenMia from '../../assets/imagenMia.png'
import './Hero.css'
import Cmas from '../../assets/Cmasmas.png'
import HTML from '../../assets/HTML.png'
import JS from '../../assets/JavaScript.png'
import React from '../../assets/React.png'
import { Flotantes } from '../Flotantes/Flotantes'
import {motion} from 'framer-motion'
import { color } from '@chakra-ui/react'
const Hero = () => {
 return(
 <div className='ContainerHero'>
        <div className="Arriba">
        <div className='Izquierda'>
        <motion.h1
        initial={{
            opacity:0,
            scale:0.5

        }}
         animate={{ 
            opacity:1,
           scale:1,
           
        }}
        transition={{duration:0.3}}
        > <span className='h1'> Hola!</span> <span className='h2'> soy Sofía</span></motion.h1>
        <motion.p
        initial={{
            
            scale:0.5
        }}
         animate={{ 
            
            scale:1,
            
        }}
        transition={{duration:0.3}}

        >una Front End Developer</motion.p>
    </div>
    <div className="Derecha">
    
       <motion.div className='imagenPresentacion'
       initial={{
                opacity:0,
                scale:0
               

        }}

        animate={{
                scale:1,
                opacity:1,
               
        }}

        transition={{
            duration:0.3
        }}
       >
            <img src={imagenMia} alt="" className='imagenMia' />
            
        </motion.div>
               
        
    </div>
        </div>
   
<div className="Flots">
            
            <Flotantes image={Cmas} txt='C++' />
            <Flotantes image={HTML} txt='HTML'/>
            <Flotantes image={JS} txt='JScipt'/>
            <Flotantes image={React} txt='React'/>
            
            
        </div>
    
 </div>
 )
}

export { Hero }