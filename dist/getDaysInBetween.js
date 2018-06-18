'use strict';

var moment = require('moment');

var getDaysInBetween = function getDaysInBetween(from, to) {
  var filterByWeekday = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var currentDate = moment(from).startOf('d');
  var endDate = moment(to).startOf('d');
  var weekdays = [];
  while (!currentDate.isSame(endDate, 'd')) {
    if (filterByWeekday) {
      if (currentDate.isoWeekday() === filterByWeekday) {
        weekdays.push(moment(currentDate.clone()));
      }
    } else {
      weekdays.push(moment(currentDate.clone()));
    }
    currentDate = currentDate.add(1, 'd');
  }
  weekdays.push(moment(currentDate.clone()));
  return weekdays;
};

module.exports = getDaysInBetween;
//# sourceMappingURL=getDaysInBetween.js.map