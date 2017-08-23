
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout, login } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
