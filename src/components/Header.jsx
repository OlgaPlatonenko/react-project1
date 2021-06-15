import '../css/Header.css';
import {useState} from 'react';
import Menu from './Menu';

function Header({
    title = '',  
}) {
    const [isOpen, setActive] = useState(false);
    return (
        <div class="header">
            <h2>{title}</h2>
            <button onClick={() => setActive(!isOpen)}>Open Menu</button>
            {
             isOpen ? <Menu /> : null
             }
           </div >
    )
}

export default Header;