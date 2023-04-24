const analyzeArray = (array) => {
  const { length } = array;

  const sum = array.reduce(
    (accumulator, currentNum) => accumulator + currentNum,
    0
  );

  const min = Math.min(...array);

  const max = Math.max(...array);

  const average = sum / length;

  return {
    average,
    min,
    max,
    length,
  };
};

module.exports = analyzeArray;
