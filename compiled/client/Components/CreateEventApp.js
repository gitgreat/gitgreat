'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateEventApp = function (_React$Component) {
  _inherits(CreateEventApp, _React$Component);

  function CreateEventApp(props) {
    _classCallCheck(this, CreateEventApp);

    var _this = _possibleConstructorReturn(this, (CreateEventApp.__proto__ || Object.getPrototypeOf(CreateEventApp)).call(this, props));

    _this.state = {
      eventName: '',
      eventDate: '',
      eventLoc: ''
    };
    _this.handleNameChange = _this.handleNameChange.bind(_this);
    _this.handleDateChange = _this.handleDateChange.bind(_this);
    _this.handleLocChange = _this.handleLocChange.bind(_this);
    _this.handleEventSubmit = _this.handleEventSubmit.bind(_this);
    return _this;
  }

  _createClass(CreateEventApp, [{
    key: 'handleNameChange',
    value: function handleNameChange(event) {
      this.setState({ eventName: event.target.value });
    }
  }, {
    key: 'handleDateChange',
    value: function handleDateChange(event) {
      this.setState({ eventDate: event.target.value });
    }
  }, {
    key: 'handleLocChange',
    value: function handleLocChange(event) {
      this.setState({ eventLoc: event.target.value });
    }
  }, {
    key: 'handleEventSubmit',
    value: function handleEventSubmit(event) {
      console.log(this.state);
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Nav, null),
        React.createElement(
          'form',
          { onSubmit: this.handleEventSubmit },
          React.createElement(
            'label',
            null,
            'Event Name:',
            React.createElement('input', { type: 'text', name: 'name',
              value: this.state.eventName,
              onChange: this.handleNameChange })
          ),
          React.createElement(
            'label',
            null,
            'Event Date:',
            React.createElement('input', { type: 'text', name: 'date',
              value: this.state.eventDate,
              onChange: this.handleDateChange })
          ),
          React.createElement(
            'label',
            null,
            'Event Location:',
            React.createElement('input', { type: 'text', name: 'location',
              value: this.state.eventLoc,
              onChange: this.handleLocChange })
          ),
          React.createElement('input', { type: 'submit', value: 'Submit' })
        )
      );
    }
  }]);

  return CreateEventApp;
}(React.Component);

window.CreateEventApp = CreateEventApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0NyZWF0ZUV2ZW50QXBwLmpzeCJdLCJuYW1lcyI6WyJDcmVhdGVFdmVudEFwcCIsInByb3BzIiwic3RhdGUiLCJldmVudE5hbWUiLCJldmVudERhdGUiLCJldmVudExvYyIsImhhbmRsZU5hbWVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlRGF0ZUNoYW5nZSIsImhhbmRsZUxvY0NoYW5nZSIsImhhbmRsZUV2ZW50U3VibWl0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYzs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXLEVBREE7QUFFWEMsaUJBQVcsRUFGQTtBQUdYQyxnQkFBVTtBQUhDLEtBQWI7QUFLQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsT0FBeEI7QUFDQSxVQUFLRSxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJGLElBQXJCLE9BQXZCO0FBQ0EsVUFBS0csaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJILElBQXZCLE9BQXpCO0FBVmlCO0FBV2xCOzs7O3FDQUVnQkksSyxFQUFPO0FBQ3RCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDVCxXQUFXUSxNQUFNRSxNQUFOLENBQWFDLEtBQXpCLEVBQWQ7QUFDRDs7O3FDQUVnQkgsSyxFQUFPO0FBQ3RCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDUixXQUFXTyxNQUFNRSxNQUFOLENBQWFDLEtBQXpCLEVBQWQ7QUFDRDs7O29DQUVlSCxLLEVBQU87QUFDckIsV0FBS0MsUUFBTCxDQUFjLEVBQUNQLFVBQVVNLE1BQU1FLE1BQU4sQ0FBYUMsS0FBeEIsRUFBZDtBQUNEOzs7c0NBRWlCSCxLLEVBQU87QUFDdkJJLGNBQVFDLEdBQVIsQ0FBWSxLQUFLZCxLQUFqQjtBQUNBUyxZQUFNTSxjQUFOO0FBQ0Q7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsR0FBRCxPQURGO0FBRUU7QUFBQTtBQUFBLFlBQU0sVUFBVSxLQUFLUCxpQkFBckI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1BQXhCO0FBQ0UscUJBQU8sS0FBS1IsS0FBTCxDQUFXQyxTQURwQjtBQUVFLHdCQUFVLEtBQUtHLGdCQUZqQjtBQUZGLFdBREY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1BQXhCO0FBQ0UscUJBQU8sS0FBS0osS0FBTCxDQUFXRSxTQURwQjtBQUVFLHdCQUFVLEtBQUtJLGdCQUZqQjtBQUZGLFdBUEY7QUFhRTtBQUFBO0FBQUE7QUFBQTtBQUVFLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFVBQXhCO0FBQ0UscUJBQU8sS0FBS04sS0FBTCxDQUFXRyxRQURwQjtBQUVFLHdCQUFVLEtBQUtJLGVBRmpCO0FBRkYsV0FiRjtBQW1CRSx5Q0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQW5CRjtBQUZGLE9BREY7QUEwQkQ7Ozs7RUF6RDBCUyxNQUFNQyxTOztBQTREbkNDLE9BQU9wQixjQUFQLEdBQXdCQSxjQUF4QiIsImZpbGUiOiJDcmVhdGVFdmVudEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENyZWF0ZUV2ZW50QXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV2ZW50TmFtZTogJycsXG4gICAgICBldmVudERhdGU6ICcnLFxuICAgICAgZXZlbnRMb2M6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZURhdGVDaGFuZ2UgPSB0aGlzLmhhbmRsZURhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUxvY0NoYW5nZSA9IHRoaXMuaGFuZGxlTG9jQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVFdmVudFN1Ym1pdCA9IHRoaXMuaGFuZGxlRXZlbnRTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZU5hbWVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtldmVudE5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgaGFuZGxlRGF0ZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2V2ZW50RGF0ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICBoYW5kbGVMb2NDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtldmVudExvYzogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICBoYW5kbGVFdmVudFN1Ym1pdChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2IC8+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUV2ZW50U3VibWl0fT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBFdmVudCBOYW1lOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXZlbnROYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVOYW1lQ2hhbmdlfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBFdmVudCBEYXRlOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRhdGVcIiBcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXZlbnREYXRlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEYXRlQ2hhbmdlfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBFdmVudCBMb2NhdGlvbjpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsb2NhdGlvblwiIFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ldmVudExvY31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTG9jQ2hhbmdlfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQ3JlYXRlRXZlbnRBcHAgPSBDcmVhdGVFdmVudEFwcDsiXX0=