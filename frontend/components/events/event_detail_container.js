import { fetchEventDetails } from '../../actions/event_actions';
import EventDetail from './event_detail';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  eventDetails: state.eventDetails
});

const mapDispatchToProps = (dispatch) => ({
  fetchEventDetails: (id) => dispatch(fetchEventDetails(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
