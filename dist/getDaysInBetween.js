'use strict';

var getDaysInBetween = function getDaysInBetween(from, to) {
  var filterByWeekday = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var currentDate = from.startOf('d');
  var endDate = to.startOf('d');
  var weekdays = [];
  while (!currentDate.isSame(endDate)) {
    if (filterByWeekday) {
      if (currentDate.isoWeekday() === filterByWeekday) {
        weekdays.push(currentDate.clone());
      }
    } else {
      weekdays.push(currentDate.clone());
    }
    currentDate = currentDate.add(1, 'd');
  }
  return weekdays;
};

module.exports = getDaysInBetween;
//# sourceMappingURL=getDaysInBetween.js.map