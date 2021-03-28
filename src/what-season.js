const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (typeof date.getMonth !== 'function') throw new Error('')
  const year = date.getFullYear();
  if (new Date(year, 2, 1) <= date && new Date(year, 4, 31,  23, 59) >= date) return 'spring';
  if (new Date(year, 5, 1) <= date && new Date(year, 7, 31, 23, 59) >= date) return 'summer';
  if (new Date(year, 8, 1) <= date && new Date(year, 10, 30,  23, 59) >= date) return 'fall';
  if (new Date(year, 0, 1) <= date && new Date(year, 1,  23, 59) >= date) return 'winter';
  if (new Date(year, 11, 1) <= date && new Date(year, 11, 31,  23, 59) >= date) return 'winter';
    return 'winter';

};
