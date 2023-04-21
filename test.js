const capitalize = require('./functions/capitalize');

test('the fist letter of a string is capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});
