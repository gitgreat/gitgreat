import React from 'react';
import EventMapAndDetails from './EventMapAndDetails.jsx';
import {Grid} from 'react-bootstrap';
import moment from 'moment';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrls: []
    }
  }
  render() {
    var mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDMwCZtOT8kkwzQuDfktBsoC6hUR5USgRI
          &q=place_id:${this.props.featuredEvent.location.placeID}`;
    var styles = {
      map: {
        height: "600px",
        width: "450px",
        border: "0"
      }
    }
    return (
      <EventMapAndDetails featuredEvent={this.props.featuredEvent} time={moment(this.props.featuredEvent.when).add(8, 'hour').calendar()}/>
    );
  }
}

module.exports = Info;