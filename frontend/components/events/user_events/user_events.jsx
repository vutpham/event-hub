import React from 'react';
import { withRouter } from 'react-router-dom';

class UserEvents extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="account-page">
        <h1>Welcome, {this.props.currentUser.username}</h1>
        <header className="account-page-header">
          <span className="bookmarks-toggle">
            My Saved Events
          </span>
          <span className="tickets-toggle">
            My Tickets
          </span>
          <span className="hosted-events-toggle">
            My Hosted Events
          </span>
        </header>
        <div className="account-page-display">

        </div>
      </div>
    );
  }
}

export default withRouter(UserEvents);
