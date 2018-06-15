const getDaysInBetween = (from, to, filterByWeekday = null) => {
  let currentDate = from.startOf('d');
  const endDate = to.startOf('d');
  const weekdays = [];
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
