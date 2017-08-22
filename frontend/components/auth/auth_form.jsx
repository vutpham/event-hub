
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

    if(this.props.formType === "login"){
      this.navLink = <Link to="/signup"> Don't have an account? Sign
                      up instead! </Link>;
    }
    else{
      this.navLink = <Link to="/login"> Already have an account? Sign
                      in instead! </Link>;
    }

    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  updateState(key){
    return (e) => {
      this.setState({[key]: e.target.value});
    };
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

  render(){
    return (
      <div>
        <form>
          <h2>{this.header}</h2>
          {this.navlink}
          {this.renderErrors()}
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
      </div>
    );
  }
}

export default withRouter(AuthForm);
