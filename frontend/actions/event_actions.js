import * as APIUtil from '../util/event_api_util';
import { receiveErrors } from './error_actions';
import * as BookmarkAPIUtil from '../util/bookmark_api_util';
import * as TicketAPIUtil from '../util/ticket_api_util';

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENT_DETAILS = "RECEIVE_EVENT_DETAILS";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const DESTROY_EVENT = "DESTROY_EVENT";
export const ADD_BOOKMARK_TO_EVENT = "ADD_BOOKMARK_TO_EVENT";
export const REMOVE_BOOKMARK_FROM_EVENT = "REMOVE_BOOKMARK_FROM_EVENT";
export const CLEAR_EVENT_DETAILS = "CLEAR_EVENT_DETAILS";

export const receiveNewEvent = event => ({
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

export const clearEventDetails = () => ({
  type: CLEAR_EVENT_DETAILS
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
    .then(event => dispatch(receiveEventDetails(event)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const deleteEvent = (id) => dispatch => {
  return APIUtil.deleteEvent(id)
    .then(() => dispatch(destroyEvent(id)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const updateEvent = (event1) => dispatch => {
  return APIUtil.updateEvent(event1)
    .then((event2) => dispatch(receiveNewEvent(event2)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const createEvent = (event1) => dispatch => {
  return APIUtil.createEvent(event1)
    .then((event2) => dispatch(receiveNewEvent(event2)))
    .fail( err => dispatch(receiveErrors(err.responseJSON)));
};

export const fetchFilteredEvents = (filters) => dispatch => {
  return APIUtil.getFilteredEvents(filters)
    .then((events) => dispatch(receiveEvents(events)));
};

export const bookmarkEvent = eventId => dispatch => {
  return BookmarkAPIUtil.createBookmark(eventId)
    .then((event) => {
      dispatch(addBookmarkToEvent(eventId));
    });
};

export const unBookmarkEvent = eventId => dispatch => {
  return BookmarkAPIUtil.deleteBookmark(eventId)
    .then((event) => dispatch(removeBookmarkFromEvent(eventId)));
};

export const fetchHostedEvents = () => dispatch => {
  return APIUtil.getHostedEvents()
    .then((events) => dispatch(receiveEvents(events)));
};

export const fetchBookmarkedEvents = () => dispatch => {
  return APIUtil.getBookmarkedEvents()
    .then((events) => dispatch(receiveEvents(events)));
};

export const buyTicket = (eventId) => dispatch => {
  return TicketAPIUtil.createTicket(eventId);
  //possibly do something to the state?
};

export const fetchAllTickets = () => dispatch => {
  return APIUtil.getPurchasedEvents()
    .then((events) => dispatch(receiveEvents(events)));
};

export const fetchMatchingEvents = (search_string) => dispatch => {
  return APIUtil.searchEvents(search_string)
    .then((events) => dispatch(receiveEvents(events)));
};
