/**
 * 用replacement取代在index位置的字元
 * @param {number} index 要取代第index位置
 * @param {string} replacement 用什麼字元取代
 */
String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};
