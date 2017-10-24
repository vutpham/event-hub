import { connect } from 'react-redux';
import Filter from './filter';
import { fetchFilteredEvents, fetchSomeEvents, fetchMatchingEvents, clearEvents }
  from '../../../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
  category: ownProps.category,
  search: ownProps.search,
  offset: ownProps.offset
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilteredEvents: (filters) => dispatch(fetchFilteredEvents(filters)),
  fetchSomeEvents: (offset) => dispatch(fetchSomeEvents(offset)),
  fetchMatchingEvents: (eventId) => dispatch(fetchMatchingEvents(eventId)),
  clearEvents: () => dispatch(clearEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
