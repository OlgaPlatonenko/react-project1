import Main from './components/Main';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Header from './components/Header';
import useState from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Header
        title="Мой первый проект на React"       
      />    
      <Main />
      <Footer />
    </div>
  )
}

export default App;
