import React from 'react';
import helpers from './WhatToBringHelpers.jsx';
import Promise from 'bluebird';
import {Button, Table, Form} from 'react-bootstrap';

//Child component within the Event Planning component
//Allows users to create a list of items that need to be brought to an event;
class WhatToBring extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [{item: 'mashed potatoes', cost: '20', owner: 'Jenn'}],
      currentItem: null,
      currentOwner: null,
      currentCost: null,
      messages: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
    this.handleOwnerChange = this.handleOwnerChange.bind(this);
    this.fetchItems = this.fetchItems.bind(this);

    this.countUniqueUsers = helpers.countUniqueUsers.bind(this);
  }
  componentDidMount() {
    this.fetchItems();
  }

  fetchItems() {
    //The event name is passed along to the server via query parameters
    //so that we can display the itemlist associated with a specific event
    var eventParam = this.props.featuredEvent.name.split(' ').join('_');
    var successHandler = function(data) {
      this.setState({itemList: data});
    };
    $.ajax({
      method: 'GET',
      url: '/itemList?eventName=' + eventParam,
      success: successHandler.bind(this)
    });
  }

  handleSubmit(event) {
    //The event name is passed along to the server via query parameters
    //so that we can post to the itemlistTable associated with a specific event
    var item = {
      item: this.state.currentItem,
      cost: this.state.currentCost,
      owner: this.state.currentOwner
    };
    var successHandler = function(data) {
      this.fetchItems();
    };
    var eventParam = this.props.featuredEvent.name.split(' ').join('_');
    $.ajax({
      method: 'POST',
      url: '/itemList?eventName=' + eventParam,
      data: JSON.stringify(item),
      contentType: 'application/json',
      success: successHandler.bind(this)
    });

    this.setState({messages: []});
    this.countUniqueUsers().then(function(data) {
      var ledger = helpers.calcAmountOwed(data);

      var payees = [];
      var payers = [];

      ledger.forEach(function(attendee) {
        if (attendee.amountOwed > 0) {
          payers.push(attendee);
        } else if (attendee.amountOwed < 0) {
          payees.push(attendee);
        }
      })
      var i = 0;
      var j = 0;

      while (i < payees.length && j < payers.length) {
        var payee = payees[i];
        var payer = payers[j];

        if (payer.amountOwed + payee.amountOwed < 0) {
          // Payee is owed more money than the payer owes
          // So credit all of the payers debt toward the payee and 
          // reduce how much the payee is owed accordingly
          var amountToPay = payer.amountOwed;
          payer.amountOwed = 0;
          payee.amountOwed += amountToPay;
          this.state.messages.push(payer.name + ' owes ' + payee.name + ' $' + amountToPay);
          j++;

        } else if (payer.amountOwed + payee.amountOwed > 0) {
          // Payer owes more money than the payee is owed
          var amountToPay = payee.amountOwed;
          payee.amountOwed = 0;
          payer.amountOwed += amountToPay
          this.state.messages.push(payer.name + ' owes ' + payee.name + ' $' + Math.abs(amountToPay));
          i++;

        } else {
          // payer.amountOwed + payee.amountOwed === 0
          var amountToPay = payer.amountOwed;
          payee.amountOwed = 0;
          payer.amountOwed = 0;
          this.state.messages.push(payer.name + ' owes ' + payee.name + ' $' + amountToPay);
          j++;
          i++;
        }
      }
      console.log('messages', this.state.messages);

    }.bind(this));
    event.preventDefault();

  }

  handleItemChange(event) {
    this.setState({
      currentItem: event.target.value
    });
  }
  handleOwnerChange(event) {
    this.setState({
      currentOwner: event.target.value
    });
  }
  handleCostChange(event) {
    this.setState({
      currentCost: event.target.value
    });
  }

  render() {


    return (
      <div id="whatToBring">
        <Form className="bringForm" onSubmit={this.handleSubmit}>
          <label>
            Owner:
          <input type='text' name='owner'
            onChange={this.handleOwnerChange}
          />
          </label>
          <label>
            Item:
            <input type='text' name='item'
              onChange={this.handleItemChange}
            />
          </label>
          <label>
            Cost:
            <input type='text' name='cost'
              onChange={this.handleCostChange}
            />
          </label>
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </Form>
        <br/>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Item</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {this.state.itemList.map( (item, index) =>
              <tr key={index}>
                <th>{item.owner}</th>
                <th>{item.item}</th>
                <th>{'$' + item.cost}</th>
              </tr>
            )}
          </tbody>
        </Table>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>
                Ledger
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.messages.map( (message, index) =>
              <tr key={index}>
                <th>{message}</th>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

module.exports = WhatToBring;