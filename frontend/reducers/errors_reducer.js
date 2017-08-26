import { RECEIVE_ERRORS } from '../actions/error_actions';

const noErrors = [];

const ErrorsReducer = (state = noErrors, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ERRORS:
      return (action.errors || []);
    default:
      return [];
  }
};

export default ErrorsReducer;
