import React from 'react';
import './Contacto.css'
const Contacto = () => {
    return(
        <div className='contenedorFomulario'>
            <form>
                <label>Ingrese su nombre: </label>
                <input type="text" placeholder='nombre' required/>
                <label>Ingrese su apellido: </label>
                <input type="text" placeholder='apellido' required />
                <label>Ingrese su email: </label>
                <input type="text" placeholder='email' required />
                <label >Ingrese su comentario</label>
                <textarea placeholder='comentario'></textarea>




                <div className='btnForm'>
                    <button type='submit'> Enviar</button>
                    <button type='reset'> Borrar</button>
                </div>
            </form>
        </div>
    )
}

export { Contacto }