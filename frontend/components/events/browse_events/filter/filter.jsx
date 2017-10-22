
import React from 'react';
import { withRouter } from 'react-router-dom';

class Filter extends React.Component{
  constructor(props){
    super(props);
    this.dynamicSelector = this.dynamicSelector.bind(this);
    this.filterEvents = this.filterEvents.bind(this);
    this.unFilterEvents = this.unFilterEvents.bind(this);
  }

  filterEvents(category){
    return (e) => {
      this.props.fetchFilteredEvents({category_names: [category]});
      this.props.history.push(`/browse-events/${category}`);
    };
  }

  dynamicSelector(int){
    if(this.props.location.pathname === '/browse-events/All' && int === 1){
      return " selected";
    }
    else if(this.props.location.pathname === '/browse-events/Sports' && int === 2){
      return " selected";
    }
    else if(this.props.location.pathname === '/browse-events/Arts' && int === 3){
      return " selected";
    }
    else if(this.props.location.pathname === '/browse-events/Music' && int === 4){
      return " selected";
    }
    else if(this.props.location.pathname === '/browse-events/Food & Drink' && int === 5){
      return " selected";
    }
    else if(this.props.location.pathname === '/browse-events/Parties' && int === 6){
      return " selected";
    }
    else if(this.props.location.pathname === '/browse-events/Classes' && int === 7){
      return " selected";
    }
    else if(this.props.location.pathname === '/browse-events/Business' && int === 8){
      return " selected";
    }
    else{
      return "";
    }
  }

  unFilterEvents(e){
    this.props.fetchAllEvents();
    this.props.history.push(`/browse-events/All`);
  }

  componentDidMount(){
    let category = this.props.category;
    if(category === 'All'){
      this.props.fetchAllEvents();
    }
    else if(category === 'Search'){
      let searchString = this.props.match.params.searchString;
      this.props.fetchFilteredEvents(searchString);
    }
    else{
      this.props.fetchFilteredEvents({category_names: [category]});
    }
  }

  render(){
    return (
      <div className="filters">
          <h2>Filter By Category</h2>
          <ul className="categories-filter-list">
            <li
              onClick={this.unFilterEvents}
              className={"filter-category" + this.dynamicSelector(1)}>
              All Categories</li>
            <li
              onClick={this.filterEvents("Sports")}
              className={"filter-category" + this.dynamicSelector(2)}>
              Sports</li>
            <li
              onClick={this.filterEvents("Arts")}
              className={"filter-category" + this.dynamicSelector(3)}>
              Arts</li>
            <li
              onClick={this.filterEvents("Music")}
              className={"filter-category" + this.dynamicSelector(4)}>Music</li>
            <li
              onClick={this.filterEvents("Food & Drink")}
              className={"filter-category" + this.dynamicSelector(5)}>
              Food & Drink</li>
            <li
              onClick={this.filterEvents("Parties")}
              className={"filter-category" + this.dynamicSelector(6)}>
              Parties</li>
            <li
              onClick={this.filterEvents("Classes")}
              className={"filter-category" + this.dynamicSelector(7)}>
              Classes</li>
            <li
              onClick={this.filterEvents("Business")}
              className={"filter-category" + this.dynamicSelector(8)}>
              Business</li>
          </ul>
      </div>
    );
  }

}

export default withRouter(Filter);
