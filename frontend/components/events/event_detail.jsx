import React from 'react';

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
    const {title, short_description, full_description, image_url, host} = this.props.eventDetails;
    return(
      <div id="event-details">
        <div id="event-details-left-col">
          <h1>{title}</h1>
          <h2>{short_description}</h2>
          <h3>Hosted By: {host}</h3>
          <p>Details: {full_description}</p>
        </div>
        <div id="event-details-right-col">
          <img className="event-detail-img" src={image_url}></img>
        </div>
      </div>
    );
  }
}

export default EventDetail;
