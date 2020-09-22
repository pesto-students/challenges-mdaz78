const ALPHABETS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const encode = (char) => {
  if (ALPHABETS.includes(char)) {
    const positionOfChar = ALPHABETS.indexOf(char);
    const rotPosition = 13;
    const totalCharsInAlphabets = 26;
    const encodedPositionOfChar = (positionOfChar + rotPosition) % totalCharsInAlphabets;
    return ALPHABETS[encodedPositionOfChar];
  }

  return char;
};

function rot13(str) {
  const chars = str.split('');
  const encodedChars = chars.map(char => encode(char));
  const encodedString = encodedChars.join('');

  return encodedString;
}

export { rot13 };
