import { RECEIVE_EVENT, RECEIVE_EVENTS, DESTROY_EVENT,
         ADD_BOOKMARK_TO_EVENT, REMOVE_BOOKMARK_FROM_EVENT }
       from '../actions/event_actions';
import merge from 'lodash/merge';

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_EVENT:
    newState = Object.assign({}, state);
    const newEvent = {id: action.event.id,
                      date: action.event.date,
                      venue: action.event.venue,
                      image_url: action.event.image_url,
                      bookmarked: action.event.bookmarked};
    newState[action.event.id] = newEvent;
    return newState;
    case RECEIVE_EVENTS:
      return action.events;
    case DESTROY_EVENT:
      newState = Object.assign({}, state);
      delete newState[action.event.id];
      return newState;
    case ADD_BOOKMARK_TO_EVENT:
      let bookmarkedEvent = state[action.id];
      bookmarkedEvent["bookmarked"] = true;
      return merge({}, state, {[action.id]: bookmarkedEvent});
    case REMOVE_BOOKMARK_FROM_EVENT:
      let unbookmarkedEvent = state[action.id];
      unbookmarkedEvent["bookmarked"] = false;
      return merge({}, state, {eventId: unbookmarkedEvent});
    default:
      return state;
  }

};

export default EventsReducer;
