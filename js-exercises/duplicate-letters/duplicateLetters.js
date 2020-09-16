function duplicateLetters(word) {
  const duplicatesHash = {};

  for (const char of word) {
    if (duplicatesHash[char]) {
      duplicatesHash[char] += 1;
    } else {
      duplicatesHash[char] = 1;
    }
  }

  const duplicatesCounts = Object.values(duplicatesHash);
  const maxDuplicates = Math.max(...duplicatesCounts);

  if (maxDuplicates === 1) {
    return false;
  }
  return maxDuplicates;
}

export { duplicateLetters };
