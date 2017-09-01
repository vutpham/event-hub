import { fetchEventDetails,
         bookmarkEvent,
         unBookmarkEvent } from '../../actions/event_actions';
import EventDetail from './event_detail';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  eventDetails: state.eventDetails
});

const mapDispatchToProps = (dispatch) => ({
  fetchEventDetails: (id) => dispatch(fetchEventDetails(id)),
  bookmarkEvent: (eventId) => dispatch(bookmarkEvent(eventId)),
  unBookmarkEvent: (eventId) => dispatch(unBookmarkEvent(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
