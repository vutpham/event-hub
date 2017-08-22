import React from 'react';
import { Route } from 'react-router';
import SessionFormContainer from './auth/auth_form_container';
import GreetingContainer from './auth/greeting_container';


const App = () => (
  <div>
    <header>
      <h1>EventHub</h1>
      <Route path='/' component={GreetingContainer} />
    </header>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
