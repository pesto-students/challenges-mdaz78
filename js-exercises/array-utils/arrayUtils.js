// eslint-disable-next-line no-prototype-builtins
const isAHole = (array, index) => !array.hasOwnProperty(index);
const isCallbackAFunction = (callback) => typeof callback === 'function';
const executeCallback = (element, callback, context, array, index) => {
  if (isAHole(array, index)) {
    return element;
  }

  if (context) {
    return callback.call(context, element, index, array);
  }

  return callback(element, index, array);
};

function forEach(array, callback, context) {
  if (!isCallbackAFunction(callback)) {
    throw new TypeError(`${callback} is not a function`);
  }

  for (let i = 0; i < array.length; i += 1) {
    const el = array[i];
    if (context && el) {
      callback.call(context, el, i, array);
    } else if (el) {
      callback(el, i, array);
    }
  }
}

function map(array, callback, context) {
  if (!isCallbackAFunction(callback)) {
    throw new TypeError(`${callback} is not a function`);
  }

  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    const el = array[i];
    if (context) {
      const mappedValue = executeCallback(el, callback, context, array, i);
      result.push(mappedValue);
    } else {
      const mappedValue = executeCallback(el, callback, context, array, i);
      result.push(mappedValue);
    }
  }

  return result;
}

function filter(array, callback, context) {
  if (!isCallbackAFunction(callback)) {
    throw new TypeError(`${callback} is not a function`);
  }

  const filteredValue = [];

  for (let i = 0; i < array.length; i += 1) {
    const el = array[i];
    let elValueReceivedFromCallback;
    if (context) {
      elValueReceivedFromCallback = executeCallback(
        el,
        callback,
        context,
        array,
        i,
      );
    } else {
      elValueReceivedFromCallback = executeCallback(
        el,
        callback,
        context,
        array,
        i,
      );
    }

    if (elValueReceivedFromCallback) {
      filteredValue.push(el);
    }
  }

  return filteredValue;
}

// function reduce(array, callback, initialValue, context) {
//   if (!isCallbackAFunction(callback)) {
//     throw new TypeError(`${callback} is not a function`);
//   }

//   let val = initialValue || array[0];
//   let result;

//   for (let i = 0; i < array.length - 1; i += 1) {
//     const nextValue = array[i + 1];

//     if (context) {
//       result = callback.call(context, val, nextValue, i, array);
//       val = nextValue;
//     } else {
//       result = callback(context, val, nextValue, i, array);
//       val = nextValue;
//     }
//   }

//   return result;
// }

export { forEach, map, filter };
