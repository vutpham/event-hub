
import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { username: "", password: "", type: this.props.formType};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.buttonText = this.props.formType;
    this.header = (this.props.formType === "Log In") ? "Log in to get started" : "Sign up to get started";
    this.renderErrors = this.renderErrors.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.processForm = this.processForm.bind(this);
    this.toggleType = this.toggleType.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.processForm(user);
  }

  processForm(user) {
    if (this.state.type === "Log In"){
      this.props.login(user);
    } else {
      this.props.signup(user);
    }
  }

  updateState(key){
    return (e) => {
      this.setState({[key]: e.target.value});
    };
  }

  navLink() {
    if (this.state.type === "Log In") {
      return <div>Don't have an account? <span className="highlight">Sign up</span></div>;
    } else {
      return <div>Already have an account? <span className="highlight">Log in</span></div>;
    }
  }

  toggleType() {
    this.state.username = "";
    this.state.password = "";
    if (this.state.type === "Log In") {
      this.props.clearErrors();
      this.setState({type: "Sign Up"});
      this.header = "Sign up to get started";
    } else {
      this.props.clearErrors();
      this.header = "Log in to get started";
      this.setState({type: "Log In"});
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}-{error}`} className="errors">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  guestLogin() {
    this.props.login({username: "Stranger", password: "password"});
  }

  render(){
    return (
      <div className="auth-form-container">
        <form className="auth-form">

          <div className="centered-text">
            <img src="https://pbs.twimg.com/profile_images/779423185339027456/qeIZUnsA_400x400.jpg"></img>
            <h1>Discover New Events</h1>
            <div className="header-text">{this.header}</div>
          </div>

          {this.renderErrors()}

          <input
            type="text"
            value={this.state.username}
            onChange={this.updateState("username")}
            placeholder="Username">
          </input>

        <br></br>

          <input
            type="password"
            value={this.state.password}
            onChange={this.updateState("password")}
            placeholder="Password">
          </input>

        <br></br>

        <input
          type="submit"
          onClick={this.handleSubmit}
          value={this.buttonText}>
        </input>

        <input
          type="submit"
          onClick={this.guestLogin}
          value="Guest Login">
        </input>


          <h3 onClick={this.toggleType}>{this.navLink()}</h3>

        </form>
      </div>
    );
  }
}

export default withRouter(AuthForm);
