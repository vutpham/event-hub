import { RECEIVE_EVENT, DESTROY_EVENT } from '../actions/event_actions';

const EventDetailsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_EVENT:
      return action.event;
    case DESTROY_EVENT:
      return {};
    default:
      return state;
  }
};

export default EventDetailsReducer;
