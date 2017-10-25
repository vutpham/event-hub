import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchAutoCompleteResults, clearAutoCompleteResults, fetchMatchingEvents } from '../../actions/event_actions';

const mapStateToProps = state => ({
  autoCompleteResults: state.autoCompleteResults
});

const mapDispatchToProps = dispatch => ({
  fetchAutoCompleteResults: (searchString) => dispatch(fetchAutoCompleteResults(searchString)),
  clearAutoCompleteResults: () => dispatch(clearAutoCompleteResults()),
  fetchMatchingEvents: (filters) => dispatch(fetchMatchingEvents(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
