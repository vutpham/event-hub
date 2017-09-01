import React from 'react';
import { Link } from 'react-router-dom';

class BrowseEventsItem extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    let {title, image_url, date, venue, price, id, bookmarked} = this.props.event;
    price = (price === 0 ? "Free" : `$${price}`);
    let bookmark;
    if (bookmarked){
      bookmark = <i className="fa fa-bookmark fa-lg" aria-hidden="true"></i>;
    }
    else bookmark = <i className="fa fa-bookmark-o fa-lg" aria-hidden="true"></i>;
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
              <div>{date} &#8226; {venue}</div>
              <div className='browse-event-footer'>
                <div>category</div>
                <div>{bookmark}</div>
              </div>
        </span>


      </div>
    );
}}

export default BrowseEventsItem;
