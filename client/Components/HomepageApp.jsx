// var App = (props) => {
//   return (
//     <div>
//       <Nav />
//       <EventList eventData={props.eventData}/>
//     </div>
//   );
// };  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: eventData,
      page: 'homepage',
      featuredEvent: null,
      test: null
    };
    this.handleEntryClick = this.handleEntryClick.bind(this);
  }

  handleEntryClick(event) {
    this.setState({
      page: 'eventDetails', 
      featuredEvent: event,
      test: 'test'
    });
  }

  render() {
    var button;
    if (this.state.page === 'homepage') {
      button = <EventList 
          eventData={this.state.eventList}
          handleEntryClick={this.handleEntryClick}
        />;
    } else if (this.state.page === 'eventDetails') {
      button = <h1>Event details</h1>;
    }
    
    return (
      <div>
        <Nav />
        {button}
      </div>
    );
  }
}


window.App = App;