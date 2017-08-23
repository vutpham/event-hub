import React from "react";
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.loggedInLinks = this.loggedInLinks.bind(this);
  }

  loggedInLinks(){
    return(
      <ul className="navbar-links" id='logged-in-links'>
        <li className="dropdown">
          Hello {this.props.currentUser.username}
        </li>
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
        <li>
          <button
          className="log-out-button"
          onClick={this.props.logout}>
          Log Out
          </button>
        </li>
        <li>Browse Events</li>
        <li>Create Event</li>
      </ul>
    );
  }
  loggedOutLinks(){
    return(
      <ul className="navbar-links" id='logged-out-links'>
        <li>Demo</li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    );
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
