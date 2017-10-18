import React from 'react';
import { Link } from 'react-router-dom';
import EventSliderContainer from '../events/index_event/event_slider_container';
import EventSearchContainer from './category_search/category_search_container';

class Home extends React.Component {
  render(){
    return(
      <div id="home">
        <img src="http://cdn.wallpapersafari.com/97/60/VKjztJ.jpg"
             id="main-home-img">
        </img>

        <section id='event-slider-container'>
        <h1 className='trending-events-title'>
          Trending on EventHub
        </h1>
        <EventSliderContainer />
        <div className="see-more-button-container">
          <Link to="/browse-events/all" className='see-more-button'>
            See More Events
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
