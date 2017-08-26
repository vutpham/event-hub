import React from 'react';
import EventSliderContainer from '../events/index_event/event_slider_container';

class Home extends React.Component {
  render(){
    return(
      <div id="home">
        <img src="http://cdn.wallpapersafari.com/97/60/VKjztJ.jpg"
             id="main-home-img">
        </img>
        <h1 className='trending-events-title'>
          Trending on EventHub
        </h1>
        <EventSliderContainer />
        <div className="see-more-button-container">
          <button className='see-more-button'>
            See More Events
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
