import React from 'react';
import { Link } from 'react-router-dom';
import EventSliderContainer from '../events/index_event/event_slider_container';
import EventSearchContainer from './category_search/category_search_container';
import SearchBar from '../search/search_bar';

class Home extends React.Component {
  render(){
    return(
      <div id="home">
        <div id='main-home-img-container'>
          <img src="https://res.cloudinary.com/vutpham/image/upload/v1508829096/compressed_yglwgi.jpg"
               id="main-home-img">
          </img>
          <div id="main-home-img-title">
            <div>
            Find Your Next Experience
            </div>
          </div>
        </div>

        <section id='event-slider-container'>
        <h1 className='trending-events-title'>
          Popular Events in <span className="area-highlight">San Francisco Bay Area</span>
        </h1>
        <EventSliderContainer />
        <div className="see-more-button-container">
          <Link to="/browse-events/All" className='see-more-button'>
            See More
          </Link>
        </div>
        </section>
        <h1 id="events-by-category">Browse Events By Category</h1>
        <EventSearchContainer />
      </div>
    );
  }
}

export default Home;
