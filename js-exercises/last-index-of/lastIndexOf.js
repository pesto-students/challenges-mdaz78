function lastIndexOf(numberToFind, arr) {
  const lengthOfArr = arr.length;

  for (let i = lengthOfArr - 1; i >= 0; i -= 1) {
    if (arr[i] === numberToFind) {
      return i;
    }
  }

  return -1;
}

export { lastIndexOf };
