import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent, updateEvent, deleteEvent, fetchEventDetails }
  from '../../actions/event_actions';
import { clearErrors } from '../../actions/error_actions';
import { allCategories } from '../../reducers/selectors';
import { fetchCategories } from '../../actions/category_actions';

  const mapStateToProps = state => ({
    errors: state.errors,
    categories: allCategories(state)
  });

  const mapDispatchToProps = dispatch => ({
    createEvent: (event) => dispatch(createEvent(event)),
    deleteEvent: (id) => dispatch(deleteEvent(id)),
    clearErrors: () => dispatch(clearErrors),
    fetchCategories: () => dispatch(fetchCategories())
  });

  export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
