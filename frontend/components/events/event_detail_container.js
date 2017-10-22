import { fetchEventDetails, bookmarkEvent,
        unBookmarkEvent, clearEventDetails } from '../../actions/event_actions';
import EventDetail from './event_detail';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  eventDetails: state.eventDetails,
  loggedIn: Boolean(state.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  fetchEventDetails: (id) => dispatch(fetchEventDetails(id)),
  bookmarkEvent: (eventId) => dispatch(bookmarkEvent(eventId)),
  unBookmarkEvent: (eventId) => dispatch(unBookmarkEvent(eventId)),
  clearEventDetails: () => dispatch(clearEventDetails())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
