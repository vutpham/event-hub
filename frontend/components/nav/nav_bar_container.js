
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout, login } from '../../actions/user_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
