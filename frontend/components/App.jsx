import React from 'react';
import { Route, Switch } from 'react-router';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './auth/auth_form_container';
import GreetingContainer from './auth/greeting_container';
import NavBarContainer from './nav/nav_bar_container';
import Home from './home/home';
import Footer from './footer';
import EventDetailContainer from './events/event_detail_container';
import EventFormContainer from './events/event_form_container';


const App = () => (
  <div id='app'>
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/events/:eventId" component={EventDetailContainer} />
      <Route exact path="/new-event" component={EventFormContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;
