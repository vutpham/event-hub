import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ErrorsReducer from './errors_reducer';
import EventsReducer from './events_reducer';
import EventDetailsReducer from './event_details_reducer';

const rootReducer = combineReducers({
  currentUser: UsersReducer,
  errors: ErrorsReducer,
  events: EventsReducer,
  eventDetails: EventDetailsReducer
});

export default rootReducer;
