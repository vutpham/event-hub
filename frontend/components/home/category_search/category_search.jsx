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
          <div
            className="sb-r1-c1"
            onClick={this.navigateToCategory("Music")}
            >
              <span className="pic-text">Music</span>
          </div>
          <div
            className="sb-r1-c2"
            onClick={this.navigateToCategory("Food & Drink")}>
              <span className="pic-text">Food & Drink</span>
          </div>
        </div>

        <div className="search-box-row">
          <div className="sb-r2-c1"
            onClick={this.navigateToCategory("Classes")}>
            <span className="pic-text">Classes</span>
          </div>
          <div
            className="sb-r2-c2"
            onClick={this.navigateToCategory("Business")}>
            <span className="pic-text">Business</span>
          </div>
          <div
            className="sb-r2-c3"
            onClick={this.navigateToCategory("Parties")}>
            <span className="pic-text">Parties</span>
          </div>
        </div>

        <div className="search-box-row">
          <div
            className="sb-r3-c1"
            onClick={this.navigateToCategory("Arts")}>
            <span className="pic-text">Arts</span>
          </div>
          <div className="sb-r3-c2"
            onClick={this.navigateToCategory("Sports")}>
            <span className="pic-text">Sports</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CategorySearch);
