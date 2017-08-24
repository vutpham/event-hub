import { RECEIVE_EVENT,
         DESTROY_EVENT,
         RECEIVE_EVENT_DETAILS } from '../actions/event_actions';

const EventDetailsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_EVENT:
      return action.event;
    case DESTROY_EVENT:
      return {};
    case RECEIVE_EVENT_DETAILS:
      return action.event;
    default:
      return state;
  }
};

export default EventDetailsReducer;
