
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
          this.props.history.push(`browse-events/${key}`);
        });
    };
  }

  render(){
    return(
      <div id="home-category-search-box">
        <div className="search-box-row">
          <div
            className="sb-r1-c1 cat-selector"
            onClick={this.navigateToCategory("Music")}
            >
              <span className="pic-text">Music</span>
              <span className="pic-text-secret">
                Intimate house concerts, major music festivals, and the occasional dance party
              </span>
          </div>
          <div
            className="sb-r1-c2 cat-selector"
            onClick={this.navigateToCategory("Food & Drink")}>
              <span className="pic-text">Food & Drink</span>
              <span className="pic-text-secret">
                Dinner parties, tasings, and big-time festivals
              </span>
          </div>
        </div>

        <div className="search-box-row">
          <div className="sb-r2-c1 cat-selector"
            onClick={this.navigateToCategory("Classes")}>
            <span className="pic-text">Classes</span>
            <span className="pic-text-secret">
              Enlightening seminars, technical workshops, and fitness classes
            </span>
          </div>
          <div
            className="sb-r2-c2 cat-selector"
            onClick={this.navigateToCategory("Business")}>
            <span className="pic-text">Business</span>
              <span className="pic-text-secret">
                Business mixers, hobby meet-ups, and panel discussions
              </span>
          </div>
          <div
            className="sb-r2-c3 cat-selector"
            onClick={this.navigateToCategory("Parties")}>
            <span className="pic-text">Parties</span>
              <span className="pic-text-secret">
                Casual happy hours, single nights, and all night celebrations
              </span>
          </div>
        </div>

        <div className="search-box-row">
          <div
            className="sb-r3-c1 cat-selector"
            onClick={this.navigateToCategory("Arts")}>
            <span className="pic-text">Arts</span>
              <span className="pic-text-secret">
                Plays, comedy nights, art-exhibitions, and film festivals
              </span>
          </div>
          <div className="sb-r3-c2 cat-selector"
            onClick={this.navigateToCategory("Sports")}>
            <span className="pic-text">Sports</span>
              <span className="pic-text-secret">
                Obstacle races, drop-in yoga classes, and the big game
              </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CategorySearch);
