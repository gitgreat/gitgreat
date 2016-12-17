import React from 'react';
import {Panel, Container} from 'react-bootstrap';

class Bulletin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }


  render() {
    return (
      <div id="bulletin" className="container">
        <Panel header='Event News & Discussion'>

        </Panel>
      </div>);
  }
}

module.exports = Bulletin;