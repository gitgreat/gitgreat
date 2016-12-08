var EventListEntry = (props) => (
  <div onClick={() => props.handleEntryClick(props.event)}>
    {props.event.ID}<br />
    {props.event.Name}<br />
    {props.event.Where}<br />
    {props.event.When}<br/>
  </div>
);

window.EventListEntry = EventListEntry;