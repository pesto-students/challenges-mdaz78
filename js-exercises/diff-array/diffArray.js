const findUniques = (array1, array2) => {
  const uniqueElements = array1.reduce((uniques, elem) => {
    if (!array2.includes(elem)) {
      return [...uniques, elem];
    }

    return uniques;
  }, []);

  return uniqueElements;
};

function diffArray(array1, array2) {
  const uniqueElementsInArray1 = findUniques(array1, array2);
  const uniqueElementsInArray2 = findUniques(array2, array1);

  return [...uniqueElementsInArray1, ...uniqueElementsInArray2];
}

export { diffArray };
