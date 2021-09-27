import React from 'react';
import './App.css';
import Hamburguer from './components/Hamburguer/Hamburguer';
import Header from './components/Header/Header';
import videoMob from './assets/videos/site_fundo.mp4'

function App() {
  return (
    <div className="containerGeral">
      <Header />
      <Hamburguer />

      {/* <video className='videoBackground' autoplay loop >
        <source src={videoMob} type='video/mp4' />
      </video> */}
    </div>
  );
}

export default App;
