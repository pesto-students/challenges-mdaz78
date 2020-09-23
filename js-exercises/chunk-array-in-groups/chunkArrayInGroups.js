function chunkArrayInGroups(array, chunkSize) {
  const copyOfArray = [...array];
  const chunks = [];

  while (copyOfArray.length > 0) {
    if (copyOfArray.length >= chunkSize) {
      const beginningOfArray = 0;
      const chunk = copyOfArray.splice(beginningOfArray, chunkSize);
      chunks.push(chunk);
    } else {
      const chunk = copyOfArray.splice(0);
      chunks.push(chunk);
    }
  }

  return chunks;
}

export { chunkArrayInGroups };
