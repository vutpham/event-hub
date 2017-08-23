import React from 'react';
import { Route } from 'react-router';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './auth/auth_form_container';
import GreetingContainer from './auth/greeting_container';
import NavBarContainer from './nav/nav_bar_container';
import Home from './home/home';


const App = () => (
  <div id='app'>
    <header>
      <NavBarContainer />
    </header>
    <Route exact path="/" component={Home} />
  </div>
);

export default App;
