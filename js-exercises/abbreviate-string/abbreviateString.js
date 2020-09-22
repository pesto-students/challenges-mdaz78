const isString = (value) => typeof value === 'string';

const isStringEmpty = (str) => str.length === 0;

const titleCase = (word) => word[0].toUpperCase() + word.slice(1);

const shortenWord = (word) => `${word[0].toUpperCase()}.`;

function abbreviateString(str) {
  if (!isString(str)) {
    throw new TypeError('Expected a string input');
  }

  if (isStringEmpty(str)) {
    return '';
  }

  const wordArray = str.split(' ');
  const firstWord = wordArray[0];

  if (wordArray.length === 1) {
    return titleCase(firstWord);
  }

  const lastWord = wordArray[wordArray.length - 1];
  return `${titleCase(firstWord)} ${shortenWord(lastWord)}`;
}

export { abbreviateString };
