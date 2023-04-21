const capitalize = require('./functions/capitalize');
const reverseString = require('./functions/reverseString');
const calculator = require('./functions/calculator');

test('the fist letter of a string is capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('the string has been reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('two numbers are being correctly computed', () => {
  expect(calculator.add(10, 2)).toBe(12);
  expect(calculator.subtract(10, 2)).toBe(8);
  expect(calculator.multiply(10, 2)).toBe(20);
  expect(calculator.divide(10, 2)).toBe(5);
});
