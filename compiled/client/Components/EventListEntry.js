"use strict";

var EventListEntry = function EventListEntry(props) {
  return React.createElement(
    "div",
    { onClick: function onClick() {
        return props.handleEntryClick(props.event);
      } },
    props.event.ID,
    React.createElement("br", null),
    props.event.Name,
    React.createElement("br", null),
    props.event.Where,
    React.createElement("br", null),
    props.event.When,
    React.createElement("br", null)
  );
};

window.EventListEntry = EventListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0V2ZW50TGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJFdmVudExpc3RFbnRyeSIsInByb3BzIiwiaGFuZGxlRW50cnlDbGljayIsImV2ZW50IiwiSUQiLCJOYW1lIiwiV2hlcmUiLCJXaGVuIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRDtBQUFBLFNBQ25CO0FBQUE7QUFBQSxNQUFLLFNBQVM7QUFBQSxlQUFNQSxNQUFNQyxnQkFBTixDQUF1QkQsTUFBTUUsS0FBN0IsQ0FBTjtBQUFBLE9BQWQ7QUFDR0YsVUFBTUUsS0FBTixDQUFZQyxFQURmO0FBQ2tCLG1DQURsQjtBQUVHSCxVQUFNRSxLQUFOLENBQVlFLElBRmY7QUFFb0IsbUNBRnBCO0FBR0dKLFVBQU1FLEtBQU4sQ0FBWUcsS0FIZjtBQUdxQixtQ0FIckI7QUFJR0wsVUFBTUUsS0FBTixDQUFZSSxJQUpmO0FBSW9CO0FBSnBCLEdBRG1CO0FBQUEsQ0FBckI7O0FBU0FDLE9BQU9SLGNBQVAsR0FBd0JBLGNBQXhCIiwiZmlsZSI6IkV2ZW50TGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEV2ZW50TGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlRW50cnlDbGljayhwcm9wcy5ldmVudCl9PlxuICAgIHtwcm9wcy5ldmVudC5JRH08YnIgLz5cbiAgICB7cHJvcHMuZXZlbnQuTmFtZX08YnIgLz5cbiAgICB7cHJvcHMuZXZlbnQuV2hlcmV9PGJyIC8+XG4gICAge3Byb3BzLmV2ZW50LldoZW59PGJyLz5cbiAgPC9kaXY+XG4pO1xuXG53aW5kb3cuRXZlbnRMaXN0RW50cnkgPSBFdmVudExpc3RFbnRyeTsiXX0=