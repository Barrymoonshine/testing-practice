const capitalize = require('./functions/capitalize');
const reverseString = require('./functions/reverseString');
const calculator = require('./functions/calculator');
const caesarCipher = require('./functions/caesarCipher');

test('The fist letter of a string is capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('The string has been reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Two numbers are being correctly computed', () => {
  expect(calculator.add(10, 2)).toBe(12);
  expect(calculator.subtract(10, 2)).toBe(8);
  expect(calculator.multiply(10, 2)).toBe(20);
  expect(calculator.divide(10, 2)).toBe(5);
});

test('Cipher is being applied correctly', () => {
  // Test wrapping from z-a
  expect(caesarCipher('zebra', 5)).toBe('ejgwf');
  // Test keeping the same case
  expect(caesarCipher('CamelCase', 7)).toBe('JhtlsJhzl');
  // Test punctuation
  expect(caesarCipher('TheBangOperator!', 3)).toBe('WkhEdqjRshudwru!');
});
