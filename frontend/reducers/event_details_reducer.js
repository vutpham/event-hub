import { RECEIVE_EVENT } from '../actions/event_actions';

const EventDetailsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_EVENT:
      return action.event;
    default:
      return state;
  }
};

export default EventDetailsReducer;
