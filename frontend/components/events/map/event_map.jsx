import React from 'react';
import MarkerManager from '../../../util/marker_manager';

class EventMap extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7008, lng: -122.3900 }, // this is SF
      zoom: 10
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.MarkerManager.updateMarkers(this.props.events);
  }

  componentDidUpdate() {
    if (this.props.singleEvent) {
      const targetEventKey = Object.keys(this.props.events)[0];
      const targetEvent = this.props.events[targetEventKey];
      this.MarkerManager.updateMarkers([targetEvent]); //grabs only that one bench
    } else {
      this.MarkerManager.updateMarkers(this.props.events);
    }
  }

  handleMarkerClick(event) {
    this.props.history.push(`events/${event.id}`);
  }

  render(){
    return(
      <div id="map-container" ref={ map => this.mapNode = map}>

      </div>
    );
  }
}

export default EventMap;
