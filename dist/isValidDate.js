'use strict';

var moment = require('moment');
/**
 * Validate Date
 * @param {any} value
 * @return bool
 */
var isValidDate = function isValidDate(value) {
  return moment(value).isValid();
};
module.exports = isValidDate;
//# sourceMappingURL=isValidDate.js.map