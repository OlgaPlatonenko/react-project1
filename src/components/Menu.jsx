import '../css/Menu.css';

function Menu({
    isOpen,
    closeMenu,
}) {
    return (
        <div>
            {isOpen ? (
                <div>
                <div class="menu">
              <button aria-label="Close" className="close-btn" onClick={closeMenu}>
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
            </div>
            ) : null}
        </div>
    )
}

export default Menu;



