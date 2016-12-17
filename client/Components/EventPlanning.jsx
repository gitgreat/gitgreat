import React from 'react';
import WhatToBring from './WhatToBring.jsx';
import Activities from './Activities.jsx';
import Reminders from './Reminders.jsx';
import Photos from './Photos.jsx';
import FeatureNavigation from './FeatureNavigation.jsx';
import moment from 'moment';

//Child component contained within HomepageApp
//Contains the event planning navigation bar
class EventPlanning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'what-to-bring'
    };

    this.changeTabDisplay = this.changeTabDisplay.bind(this);
  }

  changeTabDisplay(e) {
    this.setState({
      currentTab: e.target.value
    });
  }

  render() {
    return (
      <div>
        <FeatureNavigation changeDisplay={this.changeTabDisplay} />
        {this.props.children && React.cloneElement(this.props.children, {
          featuredEvent: this.props.featuredEvent
        })}
      </div>
    );
  }
}
module.exports = EventPlanning;

