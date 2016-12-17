//Parent App within index.html
//Allows users to view events, create and view event planning details
import React, {PropTypes} from 'react';
import EventList from './EventList.jsx';
import EventPlanning from './EventPlanning.jsx';
import CreateEventApp from './CreateEventApp.jsx';
import {browserHistory} from 'react-router';

import Navigation from './Navigation.jsx';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);

    App.contextTypes = {user: React.PropTypes.object, authenticated: React.PropTypes.bool}

    this.state = {
      featuredEvent: {}, 
      // user: this.context.user
    }



    this.handleEntryClick = this.handleEntryClick.bind(this);
    this.getEventData = this.getEventData.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount () {
    browserHistory.push('/');
    // console.log(this.context)
    // console.log(this.context)
  }

   getUser () {
    console.log(this.context)
  }

  handleEntryClick(event) {
    this.setState({
      featuredEvent: event,
    }, function() {
      browserHistory.push('/planning');
    });
  }
  getEventData(event) {
    this.setState({
      featuredEvent: event,
    }, function() {
      browserHistory.push('/planning');
    });
  }
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children && React.cloneElement(this.props.children, {
          featuredEvent: this.state.featuredEvent,
          handleEntryClick: this.handleEntryClick,
          getEventData: this.getEventData,
          user: this.context.user
        })}
      </div>
    );
  }
}

module.exports = App;