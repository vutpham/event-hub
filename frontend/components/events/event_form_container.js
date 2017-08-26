import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent, updateEvent, deleteEvent, fetchEventDetails }
  from '../../actions/event_actions';
import { clearErrors } from '../../actions/error_actions';

  const mapStateToProps = state => ({
    errors: state.errors
  });

  const mapDispatchToProps = dispatch => ({
    createEvent: (event) => dispatch(createEvent(event)),
    deleteEvent: (id) => dispatch(deleteEvent(id)),
    clearErrors: () => dispatch(clearErrors)
  });

  export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
