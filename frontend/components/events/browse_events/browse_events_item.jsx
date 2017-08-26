
import React from 'react';
import { Link } from 'react-router-dom';

class BrowseEventsItem extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    let {title, image_url, date, venue, price, id} = this.props.event;
    price = (price === 0 ? "Free" : `$${price}`);
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
                <div><i className="fa fa-bookmark-o" aria-hidden="true"></i></div>
              </div>
        </span>


      </div>
    );
}}

export default BrowseEventsItem;
