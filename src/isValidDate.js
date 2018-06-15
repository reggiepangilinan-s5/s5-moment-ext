const moment = require('moment');
/**
 * Validate Date
 * @param {any} value
 * @return bool
 */
const isValidDate = value => moment(value).isValid();
module.exports = isValidDate;
