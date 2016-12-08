"use strict";

var EventList = function EventList(props) {
  return React.createElement(
    "div",
    null,
    props.eventData.map(function (event) {
      return React.createElement(EventListEntry, {
        event: event,
        key: event.ID,
        handleEntryClick: props.handleEntryClick
      });
    })
  );
};

window.EventList = EventList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0V2ZW50TGlzdC5qc3giXSwibmFtZXMiOlsiRXZlbnRMaXN0IiwicHJvcHMiLCJldmVudERhdGEiLCJtYXAiLCJldmVudCIsIklEIiwiaGFuZGxlRW50cnlDbGljayIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Q7QUFBQTtBQUFBO0FBQ0dBLFVBQU1DLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLEtBQUQ7QUFBQSxhQUNuQixvQkFBQyxjQUFEO0FBQ0UsZUFBT0EsS0FEVDtBQUVFLGFBQUtBLE1BQU1DLEVBRmI7QUFHRSwwQkFBa0JKLE1BQU1LO0FBSDFCLFFBRG1CO0FBQUEsS0FBcEI7QUFESCxHQURjO0FBQUEsQ0FBaEI7O0FBWUFDLE9BQU9QLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6IkV2ZW50TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBFdmVudExpc3QgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICB7cHJvcHMuZXZlbnREYXRhLm1hcCgoZXZlbnQpID0+IFxuICAgICAgPEV2ZW50TGlzdEVudHJ5IFxuICAgICAgICBldmVudD17ZXZlbnR9IFxuICAgICAgICBrZXk9e2V2ZW50LklEfVxuICAgICAgICBoYW5kbGVFbnRyeUNsaWNrPXtwcm9wcy5oYW5kbGVFbnRyeUNsaWNrfVxuICAgICAgLz5cbiAgICApfVxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5FdmVudExpc3QgPSBFdmVudExpc3Q7Il19