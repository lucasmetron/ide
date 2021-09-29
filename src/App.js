import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import videoMob from './assets/videos/site_fundomobile.mp4';
import videoPC from './assets/videos/site_fundo.mp4';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Purposes from './pages/Purposes/Purposes';
import StatementFaith from './pages/StatementFaith/StatementFaith';
import Ministries from './pages/Ministries/Ministries';
import Contact from './pages/Contact/Contact';
import useWindowSize from './hooks/useWindowSize';
import Footer from './components/Footer/Footer';

function App() {

  const windowSize = useWindowSize()

  return (
    <Router>
      <div className="containerGeral">
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/quem-somos' component={AboutUs} />
          <Route exact path='/propositos' component={Purposes} />
          <Route exact path='/declaracao-de-fe' component={StatementFaith} />
          <Route exact path='/ministerios' component={Ministries} />
          <Route exact path='/contatos' component={Contact} />
          <Route exact path='*'  > <div>Página não encontrada :/</div> </Route>
        </Switch>

        <video className='videoBackground' autoplay='true' loop >
          <source src={windowSize.width > 618 ? videoPC : videoMob} type="video/mp4" />
        </video>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
