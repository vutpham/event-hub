import React from 'react';
import Slider from 'react-slick';
import EventItem from './event_slider_item';

class EventSlider extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchAllEvents();
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3000,
      draggable: true,
      pauseOnHover: true,
      arrows: true
    };

    let events = this.props.events.map((event)=>
      <div key={`event-slider${event.id}`}>
        <EventItem event={event}/>
      </div>);
    events = (events.length===0) ? <div></div> : events;
    return (
      <Slider {...settings}>
        {events}
      </Slider>
    );
  }
}

export default EventSlider;
