//Child component within the Event Planning component
//Allows user to navigate between the event planning details
import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import {Button, Nav, NavItem, Grid} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

var FeatureNavigation = (props) => (
  <Grid>
    <Nav bsStyle="pills" activeKey={1}>
      <LinkContainer to={{pathname: '/planning/info'}}>
        <NavItem eventKey={1}>Info</NavItem>
      </LinkContainer>
      <LinkContainer to={{pathname: '/planning/what-to-bring'}}>
        <NavItem eventKey={2}>What To Bring</NavItem>
      </LinkContainer>
      <LinkContainer to={{pathname: '/planning/reminders'}}>
        <NavItem eventKey={3}>Reminders</NavItem>
      </LinkContainer>
      <LinkContainer to={{pathname: '/planning/photos'}}>
        <NavItem eventKey={4}>Photos</NavItem>
      </LinkContainer>
      <LinkContainer to={{pathname: '/planning/bulletin'}}>
        <NavItem eventKey={5}>Bulletin</NavItem>
      </LinkContainer>
    </Nav>
  </Grid>
);

module.exports = FeatureNavigation;