import React from 'react';
import { Link } from 'react-router-dom';

class EventSliderItem extends React.Component{

  constructor(props){
    super(props);
    this.toggleBookmark = this.toggleBookmark.bind(this);
  }

  toggleBookmark(){
    let {id, bookmarked} = this.props.event;
    if(bookmarked){
      this.props.unBookmarkEvent(id);
    }
    else{
      this.props.bookmarkEvent(id);
    }
  }

  render(){
    let {title, image_url, date, venue, id, bookmarked} = this.props.event;
    let bookmark;
    if (bookmarked){
      bookmark = <i className="fa fa-bookmark fa-lg" onClick={this.toggleBookmark} aria-hidden="true"></i>;
    }
    else bookmark = <i className="fa fa-bookmark-o fa-lg" onClick={this.toggleBookmark} aria-hidden="true"></i>;

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
              {bookmark}
            </div>
              <div className='slider-date'>{date} &#8226; {venue}</div>
        </span>


      </div>
    );
}}

export default EventSliderItem;
