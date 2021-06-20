import Main from './components/Main';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Header from './components/Header';
import {useState} from 'react';
import './App.css';

function App() {
  const [open, setOpen]=useState(false);
  function handleMenuOpen(){
    setOpen(!open);
   }

  return (
    <div>
      <Header
        title="Мой первый проект на React"
        openMenu={handleMenuOpen}    
      />    
      <Menu 
        isOpen={open}
        closeMenu={handleMenuOpen}
        />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
