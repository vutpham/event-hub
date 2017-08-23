import React from 'react';
import { Route } from 'react-router';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './auth/auth_form_container';
import GreetingContainer from './auth/greeting_container';
import NavBarContainer from './nav/nav_bar_container';


const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
      <GreetingContainer />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <div id='main-img-container'></div>
  </div>
);

export default App;
