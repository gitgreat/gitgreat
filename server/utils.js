//helper function to send responses
var sendResponse = function(res, statusCode, type, data) {
  res.statusCode = statusCode;
  res.set('Content-Type', type);
  res.send(JSON.stringify(data));
};

module.exports.sendResponse = sendResponse;