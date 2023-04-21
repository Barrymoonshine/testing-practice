const capitalize = require('./functions/capitalize');
const reverseString = require('./functions/reverseString');

test('the fist letter of a string is capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('the string has been reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
});
