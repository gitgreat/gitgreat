import React from 'react';
import EventMap from './EventMap.jsx';
import EventDetails from './EventDetails.jsx';
import {Grid, Row, Col} from 'react-bootstrap';

class EventMapAndDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <EventDetails featuredEvent={this.props.featuredEvent}/>
          </Col>
          <Col xs={6}>
            <EventMap featuredEvent={this.props.featuredEvent}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

module.exports = EventMapAndDetails;