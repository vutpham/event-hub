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
      this.props.history.push(`/browse-events/all/${searchString}`);
    }
  }

  handleChange(e){
    this.setState({searchString: e.target.value});
  }


  render(){
    return(
      <form onSubmit={this.search}>
        <input
          className="sb-search-input"
          placeholder="Enter your search term..."
          type="search"
          value={this.state.searchString}
          onChange={this.handleChange}
          name="search"
          id="search"
        />

        <input
          className="sb-search-submit"
          type="submit"
          value="submit"
         />
        <span className="sb-icon-search"></span>
      </form>
    );
  }
}

export default withRouter(SearchBar);
