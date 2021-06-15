import '../css/Header.css';

function Header({
    title='',
    handleMenuOpen,
}){
    return(
        <div class="header">
            <h2>{title}</h2>
            <button onClick={handleMenuOpen}>Open Menu</button>
        </div>
    )
}

export default Header;