import { connect } from 'react-redux';
import AuthForm from './auth_form';
import {login, signup} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.currentUser),
    errors: state.errors,
    formType: ownProps.type
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
