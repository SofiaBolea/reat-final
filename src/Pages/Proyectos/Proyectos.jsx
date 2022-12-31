import images from '../../exports/images';
import React, { useState } from 'react';
import './Proyectos.css'
import { motion } from 'framer-motion';
import { Img, transition } from '@chakra-ui/react';

const Proyectos = () => {
    const[contador, setContador]=useState('0')

    const Sumar=()=>{
        setContador(contador+1)
        if(contador==3){
            setContador('0')
        }
    }

    const Restar=()=>{
        setContador(contador-1)
        if(contador==0){
            setContador('3')
        }
    }
    
 return(

    
    <div className='ProyectosCont'>
        <motion.div className='Titulo'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.3}}
        >
            <h1>Poyectos</h1>
            <p>En esta sección se van a encontrar todos mis proyectos</p>
        </motion.div>

        <div className='carrusel'>

            <button onClick={Restar} > <i className="bi bi-arrow-left-short"></i></button>
            {<img src={images[contador]}/>}
            <button onClick={Sumar} ><i className="bi bi-arrow-right-short"></i></button>

        </div>
    </div>
 
 )
}

export { Proyectos }