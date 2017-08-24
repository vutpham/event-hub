import { RECEIVE_EVENT, RECEIVE_EVENTS, DESTROY_EVENT }
       from '../actions/event_actions';
import merge from 'lodash/merge';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_EVENT:
      newState = merge({}, state);
      newState[action.event.id] = action.event;
      return newState;
    case RECEIVE_EVENTS:
      return action.events;
    case DESTROY_EVENT:
      newState = merge({}, state);
      delete newState[action.event.id];
    default:
      return state;
  }

};
