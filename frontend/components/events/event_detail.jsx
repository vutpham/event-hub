import React from 'react';
import { Redirect, withRouter } from "react-router";
import CheckoutModal from '../modal/checkout_modal';

class EventDetail extends React.Component{
  constructor(props){
    super(props);
    this.toggleBookmark = this.toggleBookmark.bind(this);
  }

  componentWillMount(){
    this.props.fetchEventDetails(this.props.match.params.eventId)
      .fail(()=>this.props.history.push("/"));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.eventId !== nextProps.match.params.eventId) {
      this.props.fetchEventDetails(nextProps.match.params.eventId)
        .fail(()=>this.props.history.push("/"));
    }
  }

  toggleBookmark(){
    let {id, bookmarked} = this.props.eventDetails;
    if(bookmarked){
      this.props.unBookmarkEvent(id)
        .then(this.props.fetchEventDetails(this.props.match.params.eventId));
    }
    else{
      this.props.bookmarkEvent(id)
        .then(this.props.fetchEventDetails(this.props.match.params.eventId));
    }
  }

  render(){
    let {title, full_description, image_url, host,
           price, date, venue, street_address, city_state_zip, bookmarked, id, categories} = this.props.eventDetails;
    price = (price === 0 ? "Free" : `$${price}`);
    if (categories){
      categories = categories.join(" ∙ ");
    }
    let dateString = new Date(date);
    dateString = dateString.toDateString();
    let bookmark;
    if (bookmarked){
      bookmark = <i className="fa fa-bookmark fa-2x" onClick={this.toggleBookmark} aria-hidden="true"></i>;
    }
    else bookmark = <i className="fa fa-bookmark-o fa-2x" onClick={this.toggleBookmark} aria-hidden="true"></i>;
    return(
      <div id="event-details">
        <img
          className="blurred-background-img"
          src={image_url}>
        </img>
        <div className="event-show">
          <header>
            <img className="event-detail-img" src={image_url}></img>
            <span className="title-box">
              <h1>{title}</h1>
              <h3>Hosted By: {host}</h3>
              <h4>{price}</h4>
            </span>

          </header>
          <div className="mid-row">
            {bookmark}
            <CheckoutModal
              eventId={id}
              price={this.props.eventDetails.price}
            />
          </div>

          <footer className='event-description-box'>
            <div className='desc-left-col'>
              <section className='event-description'>
                <div>
                  <h5>Description</h5>
                  <div>
                    {full_description}
                  </div>
                </div>
                <div id="tags">
                  <h5>
                    Tags
                  </h5>
                  <div>
                    {categories}
                  </div>
                </div>
              </section>
              <div className='tags'>

              </div>
            </div>
            <div className='desc-right-col'>
              <span className="event-more-info">
                <div className="event-more-info-attr">Date</div>
                <div className="event-more-info-data">{dateString}</div>
              </span>
              <div className="event-more-info">
                <div className="event-more-info-attr">Location </div>
                <span className="event-more-info-data">
                  <div className='address'>
                    <div>{venue}</div>
                    <div>{street_address}</div>
                    <div>{city_state_zip}</div>
                  </div>
                </span>
              </div>
            </div>

          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(EventDetail);
