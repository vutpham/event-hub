import { connect } from 'react-redux';
import UserEvents from './user_events';
import { fetchBookmarkedEvents,
         fetchHostedEvents,
         bookmarkEvent, unBookmarkEvent }
  from '../../../actions/event_actions';
import { allEvents } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  events: allEvents(state),
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchBookmarkedEvents: () => dispatch(fetchBookmarkedEvents()),
  fetchHostedEvents: () => dispatch(fetchHostedEvents()),
  bookmarkEvent: (id) => dispatch(bookmarkEvent(id)),
  unBookmarkEvent: (id) => dispatch(unBookmarkEvent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEvents);
