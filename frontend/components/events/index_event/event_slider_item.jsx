import React from 'react';
import { Link } from 'react-router-dom';

class EventSliderItem extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    let {title, image_url, date, venue, id} = this.props.event;
    return(
      <div className="event-slider-item">
        <Link to={`/events/${id}`}>
          <img className="event-slider-item-img"
            src={image_url}
            alt="Event Image">
          </img>
        </Link>
        <span className="event-slider-info">
            <div className='event-slider-header'>
              <div className='browse-event-title'>{title}</div>
              <i className="fa fa-bookmark-o fa-lg" aria-hidden="true"></i>
            </div>
              <div className='slider-date'>{date} &#8226; {venue}</div>
        </span>


      </div>
    );
}}

export default EventSliderItem;
