
import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.header = (this.props.formType === "login") ? "Log In" : "Sign Up";
    this.linkText = (this.props.formType === "login") ? "Sign Up" : "Log In";
    this.link = (this.props.formType === "login") ? "/signup" : "/login";
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user); //ADD ERRORS HERE
  }

  updateState(key){
    return (e) => {
      this.setState({[key]: e.target.value});
    };
  }

  render(){
    return (
      <div>
        <form>

          <h2>{this.header}</h2>
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.updateState("username")}
              placeholder="username">
            </input>
          </label>

          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.updateState("password")}
              placeholder="password">
            </input>
          </label>

          <input
            type="submit"
            onClick={this.handleSubmit}
            value={this.header}>
          </input>


        </form>
        <Link to={this.link}>{this.linkText}</Link>
      </div>
    );
  }
}

export default withRouter(AuthForm);
