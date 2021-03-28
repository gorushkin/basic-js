const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;
const K= 0.693;

module.exports = function dateSample(sampleActivity) {
  if (!parseFloat(sampleActivity) || typeof sampleActivity !== 'string') return false;
  if (parseFloat(sampleActivity) > 15 || parseFloat(sampleActivity) <= 0) return false;
    const result = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (K / HALF_LIFE_PERIOD);
  return Math.ceil(result);
};
