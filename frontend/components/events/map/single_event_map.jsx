import React from 'react';
import MarkerManager from '../../../util/marker_manager';
import values from 'lodash/values';

class SingleEventMap extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.event) return;
    let {title, street_address, city_state_zip} = nextProps.event;
    $.ajax({
      method: "get",
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${street_address} ${city_state_zip}&key=${window.maps_key}`,
      crossDomain: true
    })
    .then(data => {
      const lat = data.results[0].geometry.location.lat;
      const lng = data.results[0].geometry.location.lng;
      const position = new google.maps.LatLng(lat, lng);
      const marker = new google.maps.Marker({
        position,
        map: this.map,
        eventId: event.id
      });
      let infowindow = new google.maps.InfoWindow({
        content: title,
        disableAutoPan: true
      });
      marker.addListener('click', () => infowindow.open(this.map, marker));
      this.map.setCenter({lat: lat, lng: lng});
      window.scrollTo(0,0);
    });
  }

  componentDidMount(){
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 15
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }



  render(){
    return(
      <div id="single-map-container" ref={map1 => this.mapNode = map1}>

      </div>
    );
  }
}

export default SingleEventMap;
