const checkForPunctuation = (string) =>
  /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g.test(string);

const checkForUpperCase = (string) => /[A-Z]/.test(string);

const checkForPunctuation = (string) =>
  /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g.test(string);

const checkForUpperCase = (string) => /[A-Z]/.test(string);

const caesarCipher = (string, shift) => {
  // Edge case, check if string contains punctuation

  const CipherFactory = (num, caps) => {
    return { num, caps };
  };

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

  // converts the string into an array of numbers
  for (let i = 0; i < string.length; i += 1) {
    // Keeping any punctuation
    if (checkForPunctuation(string.charAt(i))) {
      numArray.push(string.charAt(i));
    }
    // Caps flag
    if (checkForUpperCase(string.charAt(i))) {
      let newChar = CipherFactory();
      numArray.push(`${letterNumObj[string.charAt(i)]}CAP`);
    }
    numArray.push(letterNumObj[string.charAt(i)]);
  }

  console.log(numArray);

  // Loops through the array of numbers, adds shift to each number
  // and converts the number into letter which is added onto a new string
  numArray.forEach((item) => {
    // Account for caps
    if (item.includes('CAP')) {
      const removedString = item.replace('CAP', '');
      const num = parseInst(removedString);
      const capsCipherLetter = toUpperCase(
        Object.keys(letterNumObj).find(
          (key) => letterNumObj[key] === num + shift
        )
      );
      cipherString += capsCipherLetter;
    }
    // Account for punctuation
    if (checkForPunctuation(item)) {
      cipherString += item;
    }
    // Account for the letter z
    if (checkForPunctuation === 26) {
      cipherString += Object.keys(letterNumObj).find(
        (key) => letterNumObj[key] === shift
      );
    } else {
      cipherString += Object.keys(letterNumObj).find(
        (key) => letterNumObj[key] === item + shift
      );
    }
  });

  return cipherString;
};

console.log(caesarCipher('Hello!', 1)); //Ifmmp!

module.exports = caesarCipher;
