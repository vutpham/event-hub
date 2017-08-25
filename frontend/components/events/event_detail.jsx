import React from 'react';
import { Redirect } from "react-router";

class EventDetail extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchEventDetails(this.props.match.params.eventId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.eventId !== nextProps.match.params.eventId) {
      this.props.fetchEventDetails(nextProps.match.params.eventId);
    }
  }

  render(){
    const {title, short_description, full_description, image_url, host,
           price, date, venue, address} = this.props.eventDetails;
    return(
      <div id="event-details">
        <div id="event-details-left-col">
          <h1>{title} &nbsp; <i className="fa fa-bookmark-o" aria-hidden="true"></i></h1>
          <h2>{short_description}</h2>
          <h3>Hosted By: {host}</h3>
          <p>Details: {full_description}</p>
        </div>
        <div id="event-details-right-col">

            <img className="event-detail-img" src={image_url}></img>
            <span className="event-info">

              <div className="ticket-info">
                <div>${price}</div>
                <button className="buy-tickets">Tickets</button>
              </div>

              <div className="event-more-info">
                <div className="event-more-info-attr">When:</div>
                <div className="event-more-info-data">{date}</div>
              </div>

              <div className="event-more-info">
                <div className="event-more-info-attr">How Long:</div>
                <div className="event-more-info-data">FILL IN TIME</div>
              </div>

              <div className="event-more-info">
                <div className="event-more-info-attr">Where: </div>
                <span className="event-more-info-data">
                  <div>{venue}</div>
                  <div>{address}</div>
                </span>
              </div>
          </span>
        </div>
      </div>
    );
  }
}

export default EventDetail;
