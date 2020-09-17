function balancedBraces(expression) {
  const bracketPairs = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const closedBrackets = {
    '}': true,
    ']': true,
    ')': true,
  };

  const stack = [];

  for (let i = 0; i < expression.length; i += 1) {
    const char = expression[i];

    if (bracketPairs[char]) {
      stack.push(char);
    } else if (closedBrackets[char]) {
      const poppedBracket = bracketPairs[stack.pop()];
      if (poppedBracket !== char) return false;
    }
  }

  return stack.length === 0;
}

export { balancedBraces };
