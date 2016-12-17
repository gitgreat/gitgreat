import React from 'react';
// Name
// Location
// Date
// Time
// Category
class EventDetails extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.featuredEvent.name}</h1>
        <p>{this.props.featuredEvent.location.address}</p>
        <p>{this.props.featuredEvent.when}</p>
        <h3>Categories</h3>
        <ul>
          {this.props.featuredEvent.location.categories.map(function(category) {
            return <li>{category}</li>;
          })}
        </ul>
      </div>
    );
  }
}

module.exports = EventDetails;