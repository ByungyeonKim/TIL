import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import ParticlesBg from 'particles-bg';
import MouseParticles from 'react-mouse-particles';

function App() {
  // Custom
  // let config = {
  //   num: [3, 5],
  //   rps: 0.1,
  //   radius: [5, 35],
  //   life: [1.5, 3],
  //   v: [2, 3],
  //   tha: [-40, 40],
  //   alpha: [0.6, 0],
  //   scale: [0.1, 0.4],
  //   position: 'all',
  //   color: ['random', '#ff0000'],
  //   cross: 'dead',
  //   random: 10,
  // };

  // if (Math.random() > 0.85) {
  //   config = Object.assign(config, {
  //     onParticleUpdate: (ctx, particle) => {
  //       ctx.beginPath();
  //       ctx.rect(
  //         particle.p.x,
  //         particle.p.y,
  //         particle.radius * 2,
  //         particle.radius * 2
  //       );
  //       ctx.fillStyle = particle.color;
  //       ctx.fill();
  //       ctx.closePath();
  //     },
  //   });
  // }
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
