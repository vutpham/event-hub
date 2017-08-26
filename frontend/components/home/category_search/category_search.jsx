import React from 'react';
import { withRouter } from 'react-router-dom';

class CategorySearch extends React.Component{
  constructor(props){
    super(props);
    this.navigateToCategory = this.navigateToCategory.bind(this);
  }

  navigateToCategory(key){
    return (e) => {
      key = parseInt(key);
      this.fetchFilteredEvents({category_ids: [key]})
        .then( () => this.props.history.push(`browse-events`) );
    };
  }

  render(){
    return(
      <div id="home-category-search-box">
        <div className="search-box-row">
          <img
            className="sb-r1-c1"
            src="http://res.cloudinary.com/events4u/image/upload/v1495247660/home-concert.jpg"
            onClick={this.navigateToCategory("Music")}
            >
          </img>
          <img
            className="sb-r1-c2"
            src="http://res.cloudinary.com/events4u/image/upload/v1495246509/Home-cooking-img.jpg"
            onClick={this.navigateToCategory("Cooking")}>
          </img>
        </div>

        <div className="search-box-row">
          <img className="sb-r2-c1"></img>
          <img className="sb-r2-c2"></img>
          <img className="sb-r2-c3"></img>
        </div>

        <div className="search-box-row">
          <img className="sb-r3-c1"></img>
          <img className="sb-r3-c2"></img>
        </div>
      </div>
    );
  }
}

export default withRouter(CategorySearch);
