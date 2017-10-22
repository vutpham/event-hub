import { RECEIVE_EVENT_DETAILS,
         DESTROY_EVENT, RECEIVE_NEW_EVENT,
         ADD_BOOKMARK_TO_EVENT,
         REMOVE_BOOKMARK_FROM_EVENT,
         CLEAR_EVENT_DETAILS } from '../actions/event_actions';
import merge from 'lodash/merge';

const EventDetailsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_EVENT_DETAILS:
      return action.event;
    case RECEIVE_NEW_EVENT:
      return action.event;
    case DESTROY_EVENT:
      return {};
    case CLEAR_EVENT_DETAILS:
      return {};
    case ADD_BOOKMARK_TO_EVENT:
      return merge({}, state, {bookmarked: true});
    case REMOVE_BOOKMARK_FROM_EVENT:
      return merge({}, state, {bookmarked: false});
    default:
      return state;
  }
};

export default EventDetailsReducer;
