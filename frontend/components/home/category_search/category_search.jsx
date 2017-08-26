
import React from 'react';
import { withRouter } from 'react-router-dom';

class CategorySearch extends React.Component{
  constructor(props){
    super(props);
    this.navigateToCategory = this.navigateToCategory.bind(this);
  }

  navigateToCategory(key){
    return (e) => {
      this.props.fetchFilteredEvents({category_names: [key]})
        .then( () => {
          this.props.history.push(`browse-events`);
        });
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
            onClick={this.navigateToCategory("Food & Drink")}>
          </img>
        </div>

        <div className="search-box-row">
          <img className="sb-r2-c1"
            src="http://res.cloudinary.com/events4u/image/upload/v1495254592/class.jpg"
            onClick={this.navigateToCategory("Food & Drink")}>
          </img>
          <img
            className="sb-r2-c2"
            src="http://res.cloudinary.com/events4u/image/upload/v1495252687/Networking-Stock_wrirqo.jpg"
            onClick={this.navigateToCategory("Business")}>
          </img>
          <img
            className="sb-r2-c3"
            src="http://res.cloudinary.com/events4u/image/upload/v1495253058/party-07_ka52na.jpg"
            onClick={this.navigateToCategory("Parties")}>
          </img>
        </div>

        <div className="search-box-row">
          <img
            className="sb-r3-c1"
            src="http://res.cloudinary.com/events4u/image/upload/v1495254170/artist.jpg"
            onClick={this.navigateToCategory("Arts")}>
          </img>
          <img className="sb-r3-c2"
            src="http://res.cloudinary.com/events4u/image/upload/v1495253657/stadium.jpg"
            onClick={this.navigateToCategory("Sports")}>
          </img>
        </div>
      </div>
    );
  }
}

export default withRouter(CategorySearch);
