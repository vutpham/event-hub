
import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {searchString: ""};
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  search(e){
    e.preventDefault();
    const searchString = this.state.searchString.toLowerCase();
    if(searchString.length > 0){
      this.props.fetchMatchingEvents(searchString)
      .then( () => {
        this.props.history.push(`/browse-events/Search`);
        }
      );
    }
  }

  handleChange(e){
    this.setState({searchString: e.target.value});
  }


  render(){
    return(
        <form onSubmit={this.search} className="search">
          <input
            placeholder="Search events or categories"
            type="search"
            value={this.state.searchString}
            onChange={this.handleChange}
            className="searchTerm"
            id="search"
          />
        <input type="submit" value="Search"></input>
        </form>
    );
  }
}

export default withRouter(SearchBar);
