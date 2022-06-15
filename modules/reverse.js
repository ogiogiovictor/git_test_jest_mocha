const reverseString = (string) => {
    if (string) return string.split('').reverse().join('');
    return 'No Data';
  };
  module.exports = reverseString;