import React from 'react';
import BrowseEventsItem from './browse_events_item';
import FilterContainer from './filter/filter_container';
import { Route } from 'react-router';
import EventMap from '../map/event_map';

class BrowseEvents extends React.Component{
  constructor(props){
    super(props);

    this.loadMoreEvents = this.loadMoreEvents.bind(this);
  }

  loadMoreEvents(e){
    e.preventDefault();
    let offset = this.props.events.length;
    let category = this.props.match.params.category;
    if (category === "All"){
      this.props.fetchSomeEvents(offset)
      .then((res)=>{
        if (Object.keys(res.events).length < 10){
          document.getElementById("load-button").disabled = true;
        }
        else{
          document.getElementById("load-button").disabled = false;
        }
      });
    }
    else if (category === 'Search'){
      this.props.fetchMatchingEvents(this.props.match.params.searchString);
    }
    else{
      this.props.fetchFilteredEvents({category_names: [category], offset: this.props.events.length})
      .then((res)=>{
        if (Object.keys(res.events).length < 10){
          document.getElementById("load-button").disabled = true;
        }
        else{
          document.getElementById("load-button").disabled = false;
        }
      });
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.events.length < 10){
      document.getElementById("load-button").disabled = true;
    }
    else{
      document.getElementById("load-button").disabled = false;
    }
  }

  componentDidMount(){
    window.scrollTo(0,0);
    const category = this.props.match.params.category;
    let searchString = this.props.match.params.searchString;
    console.log(category);
    console.log(this.props.events);
    if(category === "Search" && !searchString){
      this.props.fetchSomeEvents();
    }
    else if(category === "Search" && this.props.events.length === 0){
      this.props.fetchMatchingEvents(this.props.match.params.searchString);
    }
  }
  render(){
    const category = this.props.match.params.category;
    let search = (this.props.match.params.searchString ? true : false);
    let events = this.props.events.map((event,i)=> (
      <BrowseEventsItem event={event} key={`${event.name}-${event.id}-${i}`}
        bookmarkEvent={this.props.bookmarkEvent}
        unBookmarkEvent={this.props.unBookmarkEvent}
        loggedIn={this.props.loggedIn}
        />
  ));

    let resultsText;
    if (events.length === 0 && category === "Search"){
      events = <div className="search-results-text">Sorry! We could not find any events matching your search. Try some popular searches, like...
                    <strong>concert</strong>, <strong>festival</strong>, or <strong>game</strong>! </div>;
    }
    else if(search){
      resultsText = <div className="search-results-text">Showing Search Results for: "{this.props.match.params.searchString}"</div>;
    }
    else{
      resultsText = <div className="search-results-text">Showing All Events for: {category}</div>;
    }
    return(
      <div id="browse-events-container">
        <div id="filter-box-container">
          <div className="google-map-box">
            <EventMap events={this.props.events}/>
          </div>
          <Route path="/browse-events/:category/:searchString?" render={()=>
              <FilterContainer category={category} search={search}/> } />
        </div>
        <ul className="browse-events-list">
          <h1>Explore Events</h1>
          <p>Whether you’re a local, new in town, or just passing through, you’ll
            find something here that piques your interest. Business, food & drink,
            and sports & fitness are some of the most popular types of
            events. Browse below to see what’s happening in the
            <strong> San Francisco Bay Area</strong>.</p>
          {resultsText}
          {events}
          <div className='load-button-container'>
            <button
              id="load-button"
              onClick={this.loadMoreEvents}>
              See More
            </button>
          </div>
        </ul>
      </div>
    );
  }
}


export default BrowseEvents;
