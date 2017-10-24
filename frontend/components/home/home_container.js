import { connect } from 'react-redux';
import Home from './home';
import { fetchMatchingEvents } from '../../actions/event_actions';

const mapDispatchToProps = dispatch => ({
  fetchMatchingEvents: (searchString) => dispatch(fetchMatchingEvents(searchString))
});

export default connect(null, mapDispatchToProps)(Home);
