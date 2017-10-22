
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
    const searchString = this.state.searchString;
    if(searchString.length > 0){
      this.props.fetchMatchingEvents(searchString)
      .then( () => {
        this.props.history.push(`/browse-events/Search`);
        this.setState({searchString: ""});
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
            placeholder="festival, party, concert..."
            type="search"
            value={this.state.searchString}
            onChange={this.handleChange}
            className="searchTerm"
            id="search"
          />
        </form>
    );
  }
}

export default withRouter(SearchBar);
