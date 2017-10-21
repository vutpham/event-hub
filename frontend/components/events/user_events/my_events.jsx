import React from 'react';
import BrowseEventItem from '../browse_events/browse_events_item';

class MyEvents extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let {events} = this.props;
    events = events.map((event,i) => {
      return <li key={`${i}-${event.id}-user-event`}>
              <BrowseEventItem
                event={event}
                bookmarkEvent={this.props.bookmarkEvent}
                unBookmarkEvent={this.props.unBookmarkEvent}
                hosted={this.props.hosted}
                deleteEvent={this.props.deleteEvent}
                loggedIn="true"/>
            </li>;
    });
    return(
      <ul id="my-events-list">
        {events}
      </ul>
    );
  }

}

export default MyEvents;
