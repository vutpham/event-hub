import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent, updateEvent, deleteEvent, fetchEventDetails }
  from '../../actions/event_actions';

  const mapStateToProps = state => ({
  });

  const mapDispatchToProps = dispatch => ({
    createEvent: (event) => dispatch(createEvent(event)),
    deleteEvent: (id) => dispatch(deleteEvent(id))
  });

  export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
