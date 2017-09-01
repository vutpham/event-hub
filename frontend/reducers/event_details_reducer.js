import { RECEIVE_EVENT,
         DESTROY_EVENT,
         RECEIVE_EVENT_DETAILS,
         ADD_BOOKMARK_TO_EVENT,
         REMOVE_BOOKMARK_FROM_EVENT } from '../actions/event_actions';
import merge from 'lodash/merge';

const EventDetailsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_EVENT:
      return action.event;
    case DESTROY_EVENT:
      return {};
    case RECEIVE_EVENT_DETAILS:
      return action.event;
    case ADD_BOOKMARK_TO_EVENT:
      return Object.assign({}, state, {bookmarked: true});
    case REMOVE_BOOKMARK_FROM_EVENT:
      return Object.assign({}, state, {bookmarked: false});
    default:
      return state;
  }
};

export default EventDetailsReducer;
