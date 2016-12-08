'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var App = (props) => {
//   return (
//     <div>
//       <Nav />
//       <EventList eventData={props.eventData}/>
//     </div>
//   );
// };  

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      eventList: eventData,
      page: 'homepage',
      featuredEvent: null,
      test: null
    };
    _this.handleEntryClick = _this.handleEntryClick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleEntryClick',
    value: function handleEntryClick(event) {
      this.setState({
        page: 'eventDetails',
        featuredEvent: event,
        test: 'test'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var button;
      if (this.state.page === 'homepage') {
        button = React.createElement(EventList, {
          eventData: this.state.eventList,
          handleEntryClick: this.handleEntryClick
        });
      } else if (this.state.page === 'eventDetails') {
        button = React.createElement(
          'h1',
          null,
          'Event details'
        );
      }

      return React.createElement(
        'div',
        null,
        React.createElement(Nav, null),
        button
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0hvbWVwYWdlQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXZlbnRMaXN0IiwiZXZlbnREYXRhIiwicGFnZSIsImZlYXR1cmVkRXZlbnQiLCJ0ZXN0IiwiaGFuZGxlRW50cnlDbGljayIsImJpbmQiLCJldmVudCIsInNldFN0YXRlIiwiYnV0dG9uIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBV0MsU0FEQTtBQUVYQyxZQUFNLFVBRks7QUFHWEMscUJBQWUsSUFISjtBQUlYQyxZQUFNO0FBSkssS0FBYjtBQU1BLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQVJpQjtBQVNsQjs7OztxQ0FFZ0JDLEssRUFBTztBQUN0QixXQUFLQyxRQUFMLENBQWM7QUFDWk4sY0FBTSxjQURNO0FBRVpDLHVCQUFlSSxLQUZIO0FBR1pILGNBQU07QUFITSxPQUFkO0FBS0Q7Ozs2QkFFUTtBQUNQLFVBQUlLLE1BQUo7QUFDQSxVQUFJLEtBQUtWLEtBQUwsQ0FBV0csSUFBWCxLQUFvQixVQUF4QixFQUFvQztBQUNsQ08saUJBQVMsb0JBQUMsU0FBRDtBQUNMLHFCQUFXLEtBQUtWLEtBQUwsQ0FBV0MsU0FEakI7QUFFTCw0QkFBa0IsS0FBS0s7QUFGbEIsVUFBVDtBQUlELE9BTEQsTUFLTyxJQUFJLEtBQUtOLEtBQUwsQ0FBV0csSUFBWCxLQUFvQixjQUF4QixFQUF3QztBQUM3Q08saUJBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFUO0FBQ0Q7O0FBRUQsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxHQUFELE9BREY7QUFFR0E7QUFGSCxPQURGO0FBTUQ7Ozs7RUFyQ2VDLE1BQU1DLFM7O0FBeUN4QkMsT0FBT2YsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkhvbWVwYWdlQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIEFwcCA9IChwcm9wcykgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8TmF2IC8+XG4vLyAgICAgICA8RXZlbnRMaXN0IGV2ZW50RGF0YT17cHJvcHMuZXZlbnREYXRhfS8+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9OyAgXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBldmVudExpc3Q6IGV2ZW50RGF0YSxcbiAgICAgIHBhZ2U6ICdob21lcGFnZScsXG4gICAgICBmZWF0dXJlZEV2ZW50OiBudWxsLFxuICAgICAgdGVzdDogbnVsbFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVFbnRyeUNsaWNrID0gdGhpcy5oYW5kbGVFbnRyeUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVFbnRyeUNsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwYWdlOiAnZXZlbnREZXRhaWxzJywgXG4gICAgICBmZWF0dXJlZEV2ZW50OiBldmVudCxcbiAgICAgIHRlc3Q6ICd0ZXN0J1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBidXR0b247XG4gICAgaWYgKHRoaXMuc3RhdGUucGFnZSA9PT0gJ2hvbWVwYWdlJykge1xuICAgICAgYnV0dG9uID0gPEV2ZW50TGlzdCBcbiAgICAgICAgICBldmVudERhdGE9e3RoaXMuc3RhdGUuZXZlbnRMaXN0fVxuICAgICAgICAgIGhhbmRsZUVudHJ5Q2xpY2s9e3RoaXMuaGFuZGxlRW50cnlDbGlja31cbiAgICAgICAgLz47XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnBhZ2UgPT09ICdldmVudERldGFpbHMnKSB7XG4gICAgICBidXR0b24gPSA8aDE+RXZlbnQgZGV0YWlsczwvaDE+O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICB7YnV0dG9ufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbndpbmRvdy5BcHAgPSBBcHA7Il19