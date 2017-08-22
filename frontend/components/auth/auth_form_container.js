import { connect } from 'react-redux';
import AuthForm from './auth_form';
import {login, signup} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const type = (ownProps.location.pathname === '/login') ?
                "login" : "signup";
  return {
    loggedIn: Boolean(state.currentUser),
    errors: state.errors,
    formType: type
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.location.pathname === '/login') ?
                  login : signup;
  return {
    processForm: (user) => dispatch(action(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
