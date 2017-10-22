import React from 'react';
import BrowseEventsItem from './browse_events_item';
import FilterContainer from './filter/filter_container';
import { Route } from 'react-router';
import EventMap from '../map/event_map';

class BrowseEvents extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render(){
    const category = this.props.match.params.category;
    let events = this.props.events.map((event,i)=> (
      <BrowseEventsItem event={event} key={`${event.name}-${event.id}-${i}`}
        bookmarkEvent={this.props.bookmarkEvent}
        unBookmarkEvent={this.props.unBookmarkEvent}
        loggedIn={this.props.loggedIn}
        />
  ));
    if (events.length === 0){
      events = <div id="empty-search-results">Sorry! We could not find any events matching your input. We are still
                    a growing web service with a limited number of events. Try some popular searches, like...
                    <b>concert</b>, <b>festival</b>, or <b>game</b>! </div>;
    }
    return(
      <div id="browse-events-container">
        <div id="filter-box-container">
          <div className="google-map-box">
            <EventMap events={this.props.events}/>
          </div>
          <FilterContainer category={category}/>
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
