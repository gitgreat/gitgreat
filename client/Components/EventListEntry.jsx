//Child component within EventList (contained within HomepageApp)
import React from 'react';
import moment from 'moment';

class EventListEntry extends React.Component {
  constructor(props) {
    super(props);


    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(event) {
    var eventName = event.name.split(' ').join('_');
    $.ajax({
      method: 'DELETE',
      url: '/eventTable?' + $.param({"name": eventName}),
      success: function () {
        this.props.update();
      }.bind(this)
    });
  }
  
  render() {
    return (
      <div className="listEntry" >
        <button className='deleteBtn' onClick={() => this.handleDeleteClick(this.props.event)}>
          Remove Event
        </button>
        <div onClick={() => this.props.handleEntryClick(this.props.event)}>
          <strong>{this.props.event.name}</strong><br />
          Location: {this.props.event.location.label}<br />
          Time: {moment(this.props.event.when).add(8, 'hour').calendar()}<br />
        </div>
      </div>
    );
  }
}

module.exports = EventListEntry;