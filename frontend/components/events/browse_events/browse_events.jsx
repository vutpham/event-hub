import React from 'react';
import BrowseEventsItem from './browse_events_item';

class BrowseEvents extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchAllEvents(this.props.match.params.eventId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.eventId !== nextProps.match.params.eventId) {
      this.props.fetchAllEvents(nextProps.match.params.eventId);
    }
  }

  render(){
    const events = this.props.events.map((event)=> (
      <BrowseEventsItem event={event} />
  ));
    return(
      <div id="browse-events-container">
        <div id="filter-box-container">
          <div>
            GOOGLE MAP
          </div>
          <div className="filter-box">
            hix
          </div>
        </div>
        <ul className="browse-events-list">
          <h1>Explore Events</h1>
          {events}
        </ul>
      </div>
    );
  }
}


export default BrowseEvents;
