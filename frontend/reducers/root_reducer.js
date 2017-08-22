import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ErrorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  currentUser: UsersReducer,
  errors: ErrorsReducer
});

export default rootReducer;
