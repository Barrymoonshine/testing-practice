const reverseString = (string) => {
  const array = [];

  for (let i = 0; i < string.length; i += 1) {
    array.unshift(string.charAt(i));
  }
  const reversedString = array.join('');

  return reversedString;
};

module.exports = reverseString;
