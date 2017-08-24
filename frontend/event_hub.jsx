import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';
import { login, signup, logout } from './util/session_api_util';
import { fetchAllEvents, fetchEvent, deleteEvent} from './actions/event_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { currentUser: window.currentUser };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else {
    store = configureStore();
  }

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllEvents = fetchAllEvents;
  window.fetchEvent = fetchEvent;
  window.destroyEvent = deleteEvent;
  // TESTING END
  
  Modal.setAppElement('body');
  const content = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, content);
});

window.login = login;
window.signup = signup;
window.logout = logout;
