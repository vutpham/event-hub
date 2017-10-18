
import React from 'react';
import { withRouter } from 'react-router-dom';

class UserEvents extends React.Component{
  constructor(props){
    super(props);
    this.dynamicSelector = this.dynamicSelector.bind(this);
    this.goTo = this.goTo.bind(this);
  }

  dynamicSelector(int){
    console.log(this.props.location.pathname);
    if(this.props.location.pathname === '/user-events/bookmarks' && int === 1){
      return " selected";
    }
    else if(this.props.location.pathname === '/user-events/tickets' && int === 2){
      return " selected";
    }
    else if(this.props.location.pathname === '/user-events/hosted-events' && int === 3){
      return " selected";
    }
    else{
      return "";
    }
  }

  goTo(path){
    return () => this.props.history.push(path);
  }



  render(){
    return(
      <div id="account-page">
        <h1>Welcome, {this.props.currentUser.username}</h1>
        <header className="account-page-header">
          <nav
            className={"bookmarks-toggle" + this.dynamicSelector(1)}
            onClick={this.goTo('/user-events/bookmarks')}>
            <span>My Saved Events</span>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle-o fa-stack-2x"></i>
              <i className="fa fa-bookmark fa-stack-1x"></i>
            </span>
          </nav>
          <nav
            className={"tickets-toggle" + this.dynamicSelector(2)}
            onClick={this.goTo('/user-events/tickets')}>
            <span>My Tickets</span>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle-o fa-stack-2x"></i>
              <i className="fa fa-ticket fa-stack-1x"></i>
            </span>
          </nav>
          <nav className={"hosted-events-toggle" + this.dynamicSelector(3)}
            onClick={this.goTo('/user-events/hosted-events')}>
            <span>My Hosted Events</span>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle-o fa-stack-2x"></i>
              <i className="fa fa-user fa-stack-1x"></i>
            </span>
          </nav>
        </header>
        <div className="account-page-display">
        </div>
      </div>
    );
  }
}

export default withRouter(UserEvents);
