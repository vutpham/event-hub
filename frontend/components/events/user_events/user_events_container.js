import { connect } from 'react-redux';
import UserEvents from './user_events';
import { fetchBookmarkedEvents,
         fetchHostedEvents } from '../../../actions/event_actions';
import { allEvents } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  events: allEvents(state),
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchBookmarkedEvents: () => dispatch(fetchBookmarkedEvents()),
  fetchHostedEvents: () => dispatch(fetchHostedEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEvents);
