import React from 'react';
import './Footer.css'
const Footer = () => {
 return(
 <div className='FooterCont'>
    <div className='textouno'>
        <p className='p'>Gracias por visitar mi portfolio.</p>
        <p className='p'>Espero te haya gustado mi trabajo.</p>
    </div>

    <div className='textodos'>
        <p className='p'>Tambien podes visitar mis redes sociales</p>
        <div>
        <a href="https://www.instagram.com/_sofibolea/"> <i class="bi bi-instagram"></i></a>
        <a href="https://github.com/SofiaBolea"><i class="bi bi-github"></i></a>
        </div>
    </div>

 </div>
 )
}

export { Footer }