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
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 99999999,
      draggable: true,
      pauseOnHover: true,
      arrows: true
    };

    let events = this.props.events.map((event)=>
      <div><EventItem event={event}/></div>);
    events = (events.length===0) ? <div></div> : events;
    console.log(events);
    return (
      <Slider {...settings}>
        {events}
      </Slider>
    );
  }
}

export default EventSlider;
