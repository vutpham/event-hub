import React from 'react';
import { Route } from 'react-router';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './auth/auth_form_container';
import GreetingContainer from './auth/greeting_container';
import NavBarContainer from './nav/nav_bar_container';


const App = () => (
  <div id='app'>
    <header>
      <NavBarContainer />
    </header>
    <div id="main-img-holder">
      <div id='main-img-container'></div>
    </div>
  </div>
);

export default App;
