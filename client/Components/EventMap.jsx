import React from 'react';
import GoogleMap from 'google-map-react';
import EventMapMarker from './EventMapMarker.jsx';

class EventMap extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    var styles = {
      map: {
        width: '100%',
        height: '400px',
        position: 'relative'
      }
    }
    console.log(this.props)
    return (
      <GoogleMap
        style={styles.map}
        bootstrapURLKeys={{
          key: 'AIzaSyDMwCZtOT8kkwzQuDfktBsoC6hUR5USgRI',
          language: 'en'
        }}
        defaultCenter={{lat: this.props.featuredEvent.location.latitude, lng: this.props.featuredEvent.location.longitude}}
        defaultZoom={17}>
        <EventMapMarker lat={this.props.featuredEvent.location.latitude} lng={this.props.featuredEvent.location.longitude}/>
      </GoogleMap>
    );
  }
}

module.exports = EventMap;