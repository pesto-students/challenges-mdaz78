function sumFibs(num) {
  let result = 0;

  if (num < 0) {
    return result;
  }

  let previousNumber = 0;
  let currentNumber = 1;

  while (currentNumber <= num) {
    if (currentNumber % 2 !== 0) {
      result += currentNumber;
    }

    currentNumber += previousNumber;
    previousNumber = currentNumber - previousNumber;
  }

  return result;
}

function cacheFunction() {}

export { sumFibs, cacheFunction };
