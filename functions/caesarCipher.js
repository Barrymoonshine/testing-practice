const checkForPunctuation = (string) =>
  /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g.test(string);

const checkForUpperCase = (string) => /[A-Z]/.test(string);

const caesarCipher = (string, shift) => {
  // Edge case, check if string contains punctuation

  const CipherFactory = (num, caps) => ({ num, caps });

  const numArray = [];
  let cipherString = '';

  const letterNumObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  // converts the string into an object with a number and caps flag
  for (let i = 0; i < string.length; i += 1) {
    // Keeping any punctuation
    if (checkForPunctuation(string.charAt(i))) {
      numArray.push(string.charAt(i));
    }
    // Check for flag
    else if (checkForUpperCase(string.charAt(i))) {
      const newChar = CipherFactory(
        letterNumObj[string.charAt(i).toLowerCase()],
        string.charAt(i)
      );
      numArray.push(newChar);
    }
    // lowercase letter, stops undefined being pushed into array
    else if (string.charAt(i) !== undefined) {
      numArray.push(letterNumObj[string.charAt(i)]);
    }
  }

  // Loops through the array of numbers, adds shift to each number
  // and converts the number into letter which is added onto a new string
  numArray.forEach((item) => {
    // Account for caps
    if (typeof item === 'object') {
      const { num } = item;
      let capsCipherLetter = '';
      // Caps Z
      if (num === 26) {
        capsCipherLetter = Object.keys(letterNumObj).find(
          (key) => letterNumObj[key] === shift
        );
      } else {
        capsCipherLetter = Object.keys(letterNumObj).find(
          (key) => letterNumObj[key] === num + shift
        );
      }
      cipherString += capsCipherLetter.toUpperCase();
    }
    // Account for punctuation
    else if (checkForPunctuation(item)) {
      cipherString += item;
    }
    // Account for lower case z
    else if (item === 26) {
      cipherString += Object.keys(letterNumObj).find(
        (key) => letterNumObj[key] === shift
      );
    } else if (typeof item !== 'object' && item !== undefined) {
      cipherString += Object.keys(letterNumObj).find(
        (key) => letterNumObj[key] === item + shift
      );
    }
  });

  return cipherString;
};

module.exports = caesarCipher;
