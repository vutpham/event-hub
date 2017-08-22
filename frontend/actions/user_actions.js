import * as APIUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const login = (user) => dispatch => (
  APIUtil.login(user)
    .then(res => dispatch(receiveCurrentUser(res)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(() => dispatch(receiveCurrentUser(null)))
  .fail(error => dispatch(receiveErrors(error.responseJSON)))
);

export const signup = (user) => dispatch => (
  APIUtil.signup(user)
    .then(res => dispatch(receiveCurrentUser(res)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)))
);
