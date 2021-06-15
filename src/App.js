import Main from './components/Main';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Header from './components/Header';
import startMenu from './components/ShowMenu';

function openMenu(){
 // alert('open menu');
 return(
   <Menu />
 )
}

function App() {
  return (
    <div>
      <Header
        title="Header_title"
        handleMenuOpen={openMenu}
      />
      <Menu />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
