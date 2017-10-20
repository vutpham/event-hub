import { connect } from 'react-redux';
import BrowseEvents from './browse_events';
import { fetchAllEvents, bookmarkEvent,
         unBookmarkEvent, deleteEvent } from '../../../actions/event_actions';
import { allEvents } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  events: allEvents(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllEvents: () => dispatch(fetchAllEvents()),
  bookmarkEvent: (eventId) => dispatch(bookmarkEvent(eventId)),
  unBookmarkEvent: (eventId) => dispatch(unBookmarkEvent(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseEvents);
