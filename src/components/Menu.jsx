import '../css/Menu.css';
import { useState } from 'react';

function Menu() {
    const [isOpen, setActive] = useState(false);

    return (
        <div class="menu">
            <button aria-label="Close" className="close-btn" >
                <span aria-hidden="true">×</span>
            </button>

            <ul class="navigation_menu" >
                <li class="navigation_menu__item"><a href="#" class="navigation_menu__link">item 1</a></li>
                <li class="navigation_menu__item"><a href="#" class="navigation_menu__link">item 2</a></li>
                <li class="navigation_menu__item"><a href="#" class="navigation_menu__link">item 3</a></li>
                <li class="navigation_menu__item"><a href="#" class="navigation_menu__link">item 4</a></li>
                <li class="navigation_menu__item"><a href="#" class="navigation_menu__link">item 5</a></li>
            </ul>


        </div>
    )
}

export default Menu;



