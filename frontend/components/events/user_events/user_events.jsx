
import React from 'react';
import { withRouter } from 'react-router-dom';
import MyEvents from './my_events';

class UserEvents extends React.Component{
  constructor(props){
    super(props);
    this.dynamicSelector = this.dynamicSelector.bind(this);
    this.goTo = this.goTo.bind(this);
    this.fetchMatchingEvents = this.fetchMatchingEvents.bind(this);
  }

  dynamicSelector(int){
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

  componentDidMount(){
    this.fetchMatchingEvents(this.props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.fetchMatchingEvents(nextProps.location.pathname);
    }
  }

  fetchMatchingEvents(path){
    if(path === '/user-events/bookmarks'){
      this.props.fetchBookmarkedEvents();
    }
    else if(path === '/user-events/tickets'){
      this.props.fetchAllTickets();
    }
    else if(path === '/user-events/hosted-events'){
      this.props.fetchHostedEvents();
    }
    else{
      this.props.history.push('/user-events/bookmarks');
      this.props.fetchBookmarkedEvents();
    }
  }

  goTo(path){
    return () => {
      this.props.history.push(path);
      this.fetchMatchingEvents(path);
    };
  }


  render(){
    let noEventsFound;
    if (this.props.events.length === 0){
      let path = this.props.location.pathname;
      if( path === '/user-events/bookmarks'){
        noEventsFound = <div className="no-results">You don't have any saved events yet! Start clicking the bookmark icon under an event to get started.</div>;
      }
      else if (path === '/user-events/tickets'){
        noEventsFound = <div className="no-results">You don't have any tickets yet!</div>;
      }
      else{
        noEventsFound = <div className="no-results">You haven't hosted any events yet! Create an event to get started hosting your first event! </div>;
      }
    }
    return(
      <div id="account-page">
        <h1>Welcome, {this.props.currentUser.username}</h1>
        <header className="account-page-header">
          <nav
            className={"bookmarks-toggle" + this.dynamicSelector(1)}
            onClick={this.goTo('/user-events/bookmarks')}>
            <span>Saved Events</span>
          </nav>
          <nav
            className={"tickets-toggle" + this.dynamicSelector(2)}
            onClick={this.goTo('/user-events/tickets')}>
            <span>My Tickets</span>
          </nav>
          <nav className={"hosted-events-toggle" + this.dynamicSelector(3)}
            onClick={this.goTo('/user-events/hosted-events')}>
            <span>Hosted Events</span>
          </nav>
        </header>
        <div className="account-page-display">
          {noEventsFound}
          <MyEvents
            events={this.props.events}
            bookmarkEvent={this.props.bookmarkEvent}
            unBookmarkEvent={this.props.unBookmarkEvent}
            hosted={this.props.location.pathname === '/user-events/hosted-events'}
            deleteEvent={this.props.deleteEvent}/>
        </div>
      </div>
    );
  }
}

export default withRouter(UserEvents);
