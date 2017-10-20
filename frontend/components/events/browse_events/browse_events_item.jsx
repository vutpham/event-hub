import React from 'react';
import { Link } from 'react-router-dom';

class BrowseEventsItem extends React.Component{

  constructor(props){
    super(props);
    this.toggleBookmark = this.toggleBookmark.bind(this);
    this.cancelEvent = this.cancelEvent.bind(this);
    console.log(this.props);
  }

  cancelEvent(e){
    e.preventDefault();
    const confirmation = window.confirm("Are you sure you want to cancel this event?");
    if (confirmation){
      this.props.deleteEvent(this.props.event.id);
    }
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
    let {title, image_url, date, venue, price, id, bookmarked, categories} = this.props.event;
    price = (price === 0 ? "Free" : `$${price}`);
    categories = categories.join(" ∙ ");
    let dateString = new Date(date);
    dateString = dateString.toDateString();
    let cancelEventButton = "";
    if (this.props.hosted){
      cancelEventButton = <button id="cancel-event" onClick={this.cancelEvent}>Cancel Event</button>;
    }
    let bookmark;
    if (bookmarked){
      bookmark = <i className="fa fa-bookmark fa-lg" onClick={this.toggleBookmark} aria-hidden="true"></i>;
    }
    else bookmark = <i className="fa fa-bookmark-o fa-lg" onClick={this.toggleBookmark} aria-hidden="true"></i>;
    return(
      <div className="browse-event-item">
        <div className="price-tag">{price}</div>
        <Link to={`/events/${id}`}>
          <img className="browse-event-item-img"
            src={image_url}
            alt="Event Image">
          </img>
        </Link>
        <span className="browse-event-info">
              <div className='browse-event-title'>{title}</div>
              <div>{dateString} &#8226; {venue}</div>
              <div className='browse-event-footer'>
                <div>{categories}</div>
                <div>{cancelEventButton || bookmark}</div>
              </div>
        </span>


      </div>
    );
}}

export default BrowseEventsItem;
