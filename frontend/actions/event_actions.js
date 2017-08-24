import * as APIUtil from '../util/event_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const DESTROY_EVENT = "DESTROY_EVENT";

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const destroyEvent = id => ({
  type: DESTROY_EVENT,
  id
});

export const fetchAllEvents = () => dispatch => {
  return APIUtil.getEvents()
    .then((events) => dispatch(receiveEvents(events)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const fetchEvent = (id) => dispatch => {
  return APIUtil.getEvent(id)
    .then(event => dispatch(receiveEvent(event)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const deleteEvent = (id) => dispatch => {
  return APIUtil.deleteEvent(id)
    .then(() => dispatch(destroyEvent(id)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const updateEvent = (event1) => dispatch => {
  return APIUtil.updateEvent(event1)
    .then((event2) => dispatch(receiveEvent(event2)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const createEvent = (event1) => dispatch => {
  return APIUtil.createEvent(event1)
    .then((event2) => dispatch(receiveEvent(event2)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};
