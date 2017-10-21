import { connect } from 'react-redux';
import EventSlider from './event_slider';
import { fetchAllEvents,
         bookmarkEvent,
         unBookmarkEvent } from '../../../actions/event_actions';
import { allEvents } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.currentUser),
  events: allEvents(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllEvents: () => dispatch(fetchAllEvents()),
  bookmarkEvent: (eventId) => dispatch(bookmarkEvent(eventId)),
  unBookmarkEvent: (eventId) => dispatch(unBookmarkEvent(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventSlider);
