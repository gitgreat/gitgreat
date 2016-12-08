class CreateEventApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      eventDate: '',
      eventLoc: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleLocChange = this.handleLocChange.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({eventName: event.target.value});
  }

  handleDateChange(event) {
    this.setState({eventDate: event.target.value});
  }

  handleLocChange(event) {
    this.setState({eventLoc: event.target.value});
  }

  handleEventSubmit(event) {
    console.log(this.state)
    event.preventDefault();
  } 
  render() {
    return (
      <div>
        <Nav />
        <form onSubmit={this.handleEventSubmit}>
          <label>
            Event Name:
            <input type="text" name="name" 
              value={this.state.eventName}
              onChange={this.handleNameChange}/>
          </label>
          <label>
            Event Date:
            <input type="text" name="date" 
              value={this.state.eventDate}
              onChange={this.handleDateChange}/>
          </label>
          <label>
            Event Location:
            <input type="text" name="location" 
              value={this.state.eventLoc}
              onChange={this.handleLocChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

window.CreateEventApp = CreateEventApp;