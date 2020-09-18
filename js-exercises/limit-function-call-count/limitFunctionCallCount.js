const limitFunctionCallCount = (callbackFunction, maxNumberOfExecutions) => {
  let counter = 0;
  return function (...args) {
    if (counter < maxNumberOfExecutions) {
      counter += 1;
      return callbackFunction(...args);
    }

    return null;
  };
};

export { limitFunctionCallCount };
