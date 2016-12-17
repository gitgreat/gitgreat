import bluebird from 'bluebird';

var countUniqueUsers = function () {
  var eventParam = this.props.featuredEvent.name.split(' ').join('_');    
  var users = {};

  var itemList = function() {
    return $.ajax({
      method: 'GET',
      url: '/itemList?eventName=' + eventParam,
      success: function(data) {
        console.log('AJAX GET Success');
      }
    })
  }
  return itemList().then(function(data) {    
    data.forEach(function(obj) {
      var owner = obj.owner;
      var cost = parseInt(obj.cost);
      if (owner in users) {
        users[owner] += cost;
      } else {
        users[owner] = cost;
      }
    });
    return users;
  }) 
}

var calcAmountOwed = function(data) {
  var expenseTracker = [];
  var totalAmountSpent = 0;
    
  for (var key in data) {
    totalAmountSpent += data[key];

    var name = key;
    var amountSpent = data[key];
    var ledger = {};

    ledger.name = name;
    ledger.amountSpent = amountSpent;
    ledger.amountOwed = null;

    expenseTracker.push(ledger);
  }

  var eachPersonOwes = totalAmountSpent / expenseTracker.length;
  console.log('each person owes: ' + eachPersonOwes);
  
  expenseTracker.forEach(function(person) {
    person.amountOwed = eachPersonOwes - person.amountSpent;

  });

  return expenseTracker;
}

module.exports.countUniqueUsers = countUniqueUsers;
module.exports.calcAmountOwed = calcAmountOwed;


