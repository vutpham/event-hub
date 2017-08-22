import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { login, signup, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});

window.login = login;
window.signup = signup;
window.logout = logout;
