import { connect } from 'react-redux';
import Filter from './filter';
import { fetchFilteredEvents, fetchAllEvents, fetchMatchingEvents }
  from '../../../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
  category: ownProps.category
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilteredEvents: (filters) => dispatch(fetchFilteredEvents(filters)),
  fetchAllEvents: () => dispatch(fetchAllEvents()),
  fetchMatchingEvents: (eventId) => dispatch(fetchMatchingEvents(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
