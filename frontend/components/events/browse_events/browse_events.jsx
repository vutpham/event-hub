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
    const events = this.props.events.map((event,i)=> (
      <BrowseEventsItem event={event} key={`${event.name}-${event.id}-${i}`}
        bookmarkEvent={this.props.bookmarkEvent}
        unBookmarkEvent={this.props.unBookmarkEvent}/>
  ));
    return(
      <div id="browse-events-container">
        <div id="filter-box-container">
          <div>
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
