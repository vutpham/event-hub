import { connect } from 'react-redux';
import BrowseEvents from './browse_events';
import { fetchSomeEvents,
         bookmarkEvent,
         unBookmarkEvent,
         deleteEvent,
         fetchMatchingEvents,
         fetchFilteredEvents,
         clearEvents} from '../../../actions/event_actions';
import { allEvents } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  events: allEvents(state),
  loggedIn: Boolean(state.currentUser)
});

const mapDispatchToProps = dispatch => ({
  fetchSomeEvents: (offset) => dispatch(fetchSomeEvents(offset)),
  bookmarkEvent: (eventId) => dispatch(bookmarkEvent(eventId)),
  unBookmarkEvent: (eventId) => dispatch(unBookmarkEvent(eventId)),
  fetchFilteredEvents: (filters) => dispatch(fetchFilteredEvents(filters)),
  clearEvents: () => dispatch(clearEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseEvents);
