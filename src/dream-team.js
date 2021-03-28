const CustomError = require("../extensions/custom-error");

const sortNames =  (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
    return members
      .filter((i) => typeof i === 'string')
      .map((i) => i.trim().slice(0, 1).toUpperCase())
      .sort(sortNames)
      .join('');

};
