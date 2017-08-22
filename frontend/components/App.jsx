import React from 'react';
import { Route } from 'react-router';
import SessionFormContainer from './auth/auth_form_container';


const App = () => (
  <div>
    <h1>EventHub</h1>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
