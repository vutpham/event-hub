import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.loggedInGreeting = this.loggedInGreeting.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);

  }

  loggedInGreeting() {
    return (
    <div id="loggedInGreeting">
      <h2>Welcome, {this.props.currentUser.username}</h2>
      <button onClick={this.props.logout}>Log Out</button>
    </div>
  );}

  sessionLinks() {
    return (
    <div id="sessionLinks">
      <Link to="/signup">Sign Up</Link>
      <br></br>
      <Link to="/login">Log In</Link>
    </div>
  );}

  render(){
    const renderComponent = this.props.currentUser ?
      this.loggedInGreeting() : this.sessionLinks();
    return (
      renderComponent
    );
  }

}

export default Greeting;
