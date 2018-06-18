const moment = require('moment');

const getDaysInBetween = (from, to, filterByWeekday = null) => {
  let currentDate = moment(from).startOf('d');
  const endDate = moment(to).startOf('d');
  const weekdays = [];
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
