import React from 'react';
import { MenuMobile } from '../MenuMobile/MenuMobile';
import { NavBar } from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
 return(
 <div className='headerCont'>
   <div className="logo">
        <h1> SOFIA</h1>
        <p>portfolio</p>
   </div>
    <MenuMobile/>
    <NavBar/>
 </div>
 )
}

export { Header }