import React from "react";
import { Link, withRouter } from 'react-router-dom';
import AuthModal from '../modal/auth_modal';

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.loggedInLinks = this.loggedInLinks.bind(this);
  }

  loggedInLinks(){
    return(
      <ul className="navbar-links" id='logged-in-links'>
        <li className="dropdown">
          <div id="username"> Hello {this.props.currentUser.username}
            <span id="fa-arrow"><i className="fa fa-angle-down" aria-hidden="true"></i></span>
            </div>
        <ul className="dropdown-content">
              <Link to="/user-events/bookmarks"><li>Saved Events</li></Link>
              <Link to="/user-events/tickets"><li>Tickets</li></Link>
              <Link to="/user-events/hosted-events"><li>Hosted Events</li></Link>
              <li><button
                className="log-out-button"
                onClick={this.props.logout}>
                Log Out
              </button></li>
        </ul>
        </li>
        <li>
          <button
          className="log-out-button"
          onClick={this.props.logout}>
          Log Out
          </button>
        </li>
        <Link to="/browse-events/All"><li>Browse Events</li></Link>
        <Link to="/new-event"><div id="create">Create Event</div></Link>
      </ul>
    );
  }

  loggedOutLinks(){
    return(
      <ul className="navbar-links" id='logged-out-links'>
        <li><AuthModal type="Log In" clearErrors={this.props.clearErrors}/></li>
        <li><AuthModal type="Sign Up" clearErrors={this.props.clearErrors}/></li>
      </ul>
    );
  }

  render(){
    const navLinks = (this.props.currentUser ?
                  this.loggedInLinks() : this.loggedOutLinks());
    return(
      <nav id='main-nav'>
        <Link to="/"><div className="logo">EventHub</div></Link>
        {navLinks}
      </nav>
    );
  }

}

export default withRouter(NavBar);
