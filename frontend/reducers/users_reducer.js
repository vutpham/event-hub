import { RECEIVE_CURRENT_USER } from '../actions/user_actions';

const nullUser = null;

const UserReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
};
