import React from 'react';
import {browserHistory} from 'react-router';
import Geosuggest from 'react-geosuggest';
//Parent App within createEvent.html
//Allows users to create new events
class CreateEventApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      when: '',
      location: {},
      owner: this.props.user
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleLocChange = this.handleLocChange.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
  }

  componentDidMount () {
    console.log(this.state.owner)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleDateChange(event) {
    this.setState({when: event.target.value});
  }
  handleLocChange(event) {
    this.setState({
      location: {
        label: event.label,
        address: event.gmaps.formatted_address,
        latitude: event.location.lat,
        longitude: event.location.lng,
        placeID: event.placeId,
        categories: event.gmaps.types
      }
    });
  }
  handleEventSubmit(event) {
    //sends a post request with the event data to the server, which will enter the event into
    //the eventTable
    var now = new Date();
    var eventDate = new Date(this.state.when);
    eventDate = eventDate.setHours(eventDate.getHours() + 8);
    if(eventDate >= now) {
      $.ajax({
        method: 'POST',
        url: '/eventTable',
        contentType: 'application/json',
        data: JSON.stringify(this.state),
        success: function(event) {
          this.props.getEventData(this.state);
        }.bind(this)
      });
    } else {
      $('#msg').text('event is in the past');
    }
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="featureBody" id="createEvent">
          <form onSubmit={this.handleEventSubmit}>
            <p><label>
              Name:
              <input type="text" name="name"
                value={this.state.name}
                onChange={this.handleNameChange}/>
            </label></p>
            <p><label>
              Date:
              <input type="datetime-local" name="date"
                value={this.state.when}
                onChange={this.handleDateChange}/>
            </label></p>
            <p><label>
              Location:
            </label></p>
            <Geosuggest onSuggestSelect={this.handleLocChange}/>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div id='msg'></div>
      </div>
    );
  }
}

module.exports = CreateEventApp;