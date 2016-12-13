//Child component within the Event Planning component
//Allows user to navigate between the event planning details

var FeatureNavigation = (props) => (
  <div id="eventNav">
    <button href='#' className="wtbBtn firstBtn" value="whatToBringBtn" onClick={(e) => props.changeDisplay(e)}>What To Bring</button>
    <button href='#' className="reminderBtn" value="reminderBtn" onClick={(e) => props.changeDisplay(e)}>Reminders</button>
    <button href='#' className="actBtn" value="activitiesBtn" onClick={(e) => props.changeDisplay(e)}>Activities (IP)</button>
    <button href='#' className="chatBtn" value="chatBtn" onClick={(e) => props.changeDisplay(e)}>Chatroom (IP)</button>    
  </div>
);

window.FeatureNavigation = FeatureNavigation;