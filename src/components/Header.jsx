import '../css/Header.css';
import {useState} from 'react';
import Menu from './Menu';

function Header({
    title='',
    openMenu,
}) {
    
   return(
       <header>
          <h2>{title}</h2>
          <button onClick={openMenu} class="btn-header">Open menu</button>
       </header>
   )
}

export default Header;
