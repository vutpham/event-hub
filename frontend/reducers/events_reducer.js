import { RECEIVE_EVENT, RECEIVE_EVENTS, DESTROY_EVENT }
       from '../actions/event_actions';
import { merge } from 'lodash';

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_EVENT:
    newState = merge({}, state);
    const newEvent = {id: action.event.id,
                      date: action.event.date,
                      venue: action.event.venue,
                      image_url: action.event.image_url};
    newState[action.event.id] = newEvent;
    return newState;
    case RECEIVE_EVENTS:
      return action.events;
    case DESTROY_EVENT:
      newState = merge({}, state);
      delete newState[action.event.id];
      return newState;
    default:
      return state;
  }

};

export default EventsReducer;
