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

export const fetchAllEvents = () => dispatch => (
  APIUtil.getEvents()
    .then((res) => dispatch(receiveEvents(res)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchEvent = (id) => dispatch => {
  return APIUtil.getEvent(id)
    .then(res => dispatch(receiveEvent(res)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const deleteEvent = (id) => dispatch => {
  return APIUtil.deleteEvent(id)
    .then(() => dispatch(destroyEvent(id)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const updateEvent = (event) => dispatch => {
  return APIUtil.updateEvent(event)
    .then((res) => dispatch(receiveEvent(res)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const createEvent = (event) => dispatch => {
  return APIUtil.createEvent(event)
    .then((res) => dispatch(receiveEvent(res)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};
