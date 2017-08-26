
import { connect } from 'react-redux';
import EventSlider from './event_slider';
import { fetchAllEvents } from '../../../actions/event_actions';
import { allEvents } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  events: allEvents(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllEvents: () => dispatch(fetchAllEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventSlider);
