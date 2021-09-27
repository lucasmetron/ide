import React from 'react';
import './App.css';
import Hamburguer from './components/Hamburguer/Hamburguer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="containerGeral">
      <Header />
      <Hamburguer />
    </div>
  );
}

export default App;
