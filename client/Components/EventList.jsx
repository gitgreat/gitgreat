var EventList = (props) => (
  <div>
    {props.eventData.map((event) => 
      <EventListEntry 
        event={event} 
        key={event.ID}
        handleEntryClick={props.handleEntryClick}
      />
    )}
  </div>
);

window.EventList = EventList;