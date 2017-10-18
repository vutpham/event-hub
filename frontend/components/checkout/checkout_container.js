
import { connect } from 'react-redux';
import { buyTicket } from '../../actions/event_actions';
import Checkout from './checkout';

const mapStateToProps = (state, ownProps) => ({
  eventId: ownProps.eventId,
  price: ownProps.price
});

const mapDispatchToProps = (dispatch) => ({
  buyTicket: (eventId) => dispatch(buyTicket(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
