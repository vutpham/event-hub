import { connect } from 'react-redux';
import Filter from './filter';
import { fetchFilteredEvents,
         fetchAllEvents } from '../../../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
  category: ownProps.category
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilteredEvents: (filters) => dispatch(fetchFilteredEvents(filters)),
  fetchAllEvents: () => dispatch(fetchAllEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
