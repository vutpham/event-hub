import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import SessionFormContainer from './auth/auth_form_container';
import GreetingContainer from './auth/greeting_container';
import NavBarContainer from './nav/nav_bar_container';
import Home from './home/home';
import Footer from './footer';
import EventDetailContainer from './events/event_detail_container';
import EventFormContainer from './events/event_form_container';
import BrowseEventsContainer
       from './events/browse_events/browse_events_container';
import UserEventsContainer from './events/user_events/user_events_container';
import UserEvents from './events/user_events/user_events_container';


const App = () => (
  <div id='app'>
    <header>
      <NavBarContainer />
    </header>
    <div id='main-content'>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/events/:eventId" component={EventDetailContainer} />
      <Route exact path="/new-event" component={EventFormContainer} />
      <Route path="/browse-events/:category" component={ BrowseEventsContainer } />
      <Route path="/browse-events/:category/:searchString?" component={ BrowseEventsContainer } />
      <ProtectedRoute path="/user-events" component={ UserEventsContainer } />
    </Switch>
    </div>

    <footer id='main-footer-container'>
      <Footer />
    </footer>
  </div>
);

export default withRouter(App);
