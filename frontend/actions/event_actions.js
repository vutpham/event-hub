import * as APIUtil from '../util/event_api_util';
import * as BookmarkAPIUtil from '../util/bookmark_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENT_DETAILS = "RECEIVE_EVENT_DETAILS";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const DESTROY_EVENT = "DESTROY_EVENT";
export const ADD_BOOKMARK_TO_EVENT = "ADD_BOOKMARK_TO_EVENT";
export const REMOVE_BOOKMARK_FROM_EVENT = "REMOVE_BOOKMARK_FROM_EVENT";

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveEventDetails = event => ({
  type: RECEIVE_EVENT_DETAILS,
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

export const addBookmarkToEvent = id => ({
  type: ADD_BOOKMARK_TO_EVENT,
  id
});

export const removeBookmarkFromEvent = id => ({
  type: REMOVE_BOOKMARK_FROM_EVENT,
  id
});

export const fetchAllEvents = () => dispatch => {
  return APIUtil.getEvents()
    .then((events) => dispatch(receiveEvents(events)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const fetchEventDetails = (id) => dispatch => {
  return APIUtil.getEvent(id)
    .then(res => dispatch(receiveEventDetails(res)))
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
  console.log(event);
  return APIUtil.createEvent(event)
    .then((res) => dispatch(receiveEvent(res)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const fetchFilteredEvents = (filters) => dispatch => {
  return APIUtil.getFilteredEvents(filters)
    .then((events) => dispatch(receiveEvents(events)));
};

export const bookmarkEvent = eventId => dispatch => {(
  BookmarkAPIUtil.createBookmark(eventId)
    .then((events) => dispatch(addBookmarkToEvent(eventId)))
  );
};

export const unbookmarkEvent = eventId => dispatch => {(
  BookmarkAPIUtil.deleteBookmark(eventId)
    .then((events) => dispatch(removeBookmarkFromEvent(eventId)))
  );
};
