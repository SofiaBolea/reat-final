import React from 'react';
import './Flotantes.css'


const Flotantes = ({image, txt}) => {
 return(
 <div className='Flotantes'>
    <img src={image} alt=""  className='imagenflot'/>
    <p className='texto'>{txt}</p>
 </div>
 )
}

export { Flotantes }