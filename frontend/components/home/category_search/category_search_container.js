import { connect } from 'react-redux';
import { fetchFilteredEvents } from '../../../actions/event_actions';
import CategorySearch from './category_search';

const mapDispatchToProps = (dispatch) => ({
  fetchFilteredEvents: (filters => dispatch(fetchFilteredEvents(filters)))
});

export default connect(null, mapDispatchToProps)(CategorySearch);
