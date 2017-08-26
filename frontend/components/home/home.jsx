import React from 'react';
import EventSliderContainer from '../events/index_event/event_slider_container';
import { Link } from 'react-router-dom';

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
          <Link to="/browse-events" className='see-more-button'>
            See More Events
          </Link>
        </div>
        </section>
      </div>
    );
  }
}

export default Home;
