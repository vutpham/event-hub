import React from 'react';
import { Route } from 'react-router';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './auth/auth_form_container';
import GreetingContainer from './auth/greeting_container';


const App = () => (
  <div>
    <header>
      <h1>EventHub</h1>
      <Route path='/' component={GreetingContainer} />
    </header>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
