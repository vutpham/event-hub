import React from "react";
import { Link } from 'react-router-dom';
import AuthModal from '../modal/auth_modal';

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.loggedInLinks = this.loggedInLinks.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  loggedInLinks(){
    return(
      <ul className="navbar-links" id='logged-in-links'>
        <li className="dropdown">
          <div id="username"> Hello {this.props.currentUser.username}
            <span id="fa-arrow"><i className="fa fa-angle-down" aria-hidden="true"></i></span>
            </div>
        <ul className="dropdown-content">
            <li>
              Saved Events
            </li>
            <li>
              Tickets
            </li>
            <li>
              Hosted Events
            </li>
            <li>
              <button
                className="log-out-button"
                onClick={this.props.logout}>
                Log Out
              </button>
            </li>
        </ul>
        </li>
        <li>
          <button
          className="log-out-button"
          onClick={this.props.logout}>
          Log Out
          </button>
        </li>
        <li className="text-li">Browse Events</li>
        <div id="create">Create Event</div>
      </ul>
    );
  }

  loggedOutLinks(){
    return(
      <ul className="navbar-links" id='logged-out-links'>
        <li className="text-li" onClick={this.guestLogin}>Demo</li>
        <li className="text-li"><Link to="/signup">Sign Up</Link></li>
        <li className="text-li"><Link to="/login">Log In</Link></li>
        <li><AuthModal type="Log In" clearErrors={this.props.clearErrors}/></li>
        <li><AuthModal type="Sign Up" clearErrors={this.props.clearErrors}/></li>
      </ul>
    );
  }

  guestLogin() {
    this.props.login({username: "Stranger", password: "password"});
  }

  render(){
    const navLinks = (this.props.currentUser ?
                  this.loggedInLinks() : this.loggedOutLinks());
    return(
      <nav id='main-nav'>
        <div className="logo"><Link to="/">EventHub</Link></div>
        {navLinks}
      </nav>
    );
  }

}

export default NavBar;
