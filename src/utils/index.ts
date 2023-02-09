/**
 * Splits a string with the given separator
 * @param {string} toSplit the string to split
 * @param {string} separator the given separator
 * @returns {Array<string>} the split result
 */
const splitString = (toSplit: string, separator: string): Array<string> => {
  return toSplit.split(separator);
};

export default splitString;
