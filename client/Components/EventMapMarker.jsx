import React from 'react';

var styles = {
  marker: {
    fontSize: '3em',
    paddingBottom: '50px',
    color: '#BD4F6C'
  }
}
function EventMapMarker(props) {
  return <i style={styles.marker} className="fa fa-map-marker"></i>;
}

module.exports = EventMapMarker;

