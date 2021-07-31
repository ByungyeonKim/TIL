import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import ParticlesBg from 'particles-bg';
import MouseParticles from 'react-mouse-particles';

function App() {
  return (
    <BrowserRouter>
      <MouseParticles g={1} color='random' cull='col,image-wrapper' />
      <ParticlesBg type='ball' bg={true} />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
      <Switch>
        {/* Class Component 사용 시  */}
        {/* <Route path={['/', '/home']} exact component={Home} /> */}
        <Route path={['/', '/home']} exact>
          <Home />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
