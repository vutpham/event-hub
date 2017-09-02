import { connect } from 'react-redux';
import UserEvents from './user_events';
import { getBookmarkedEvents, getHostedEvents } from '../../../actions/event_actions';
import { allEvents } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  events: allEvents(state),
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  getBookmarkedEvents: () => dispatch(getBookmarkedEvents()),
  getHostedEvents: () => dispatch(getHostedEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEvents);
