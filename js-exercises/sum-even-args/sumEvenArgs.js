// eslint-disable-next-line no-restricted-globals
const isEvenNumber = (num) => !isNaN(num) && num % 2 === 0;

const sumEvenArgs = (...nums) => {
  const result = nums.reduce((sum, num) => {
    const val = parseFloat(num);
    if (isEvenNumber(val)) {
      return sum + val;
    }

    return sum;
  }, 0);

  return result;
};
export { sumEvenArgs };
