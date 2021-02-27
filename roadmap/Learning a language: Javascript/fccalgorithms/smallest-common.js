function smallestCommons(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  let factor = arr[arr.length - 1];
  let result = factor;

  while (!isDivisibleByRange(result, arr)) {
    result += factor;
  }

  return result;
}

function isDivisibleByRange(number, range) {
  for (let i = range[0]; i <= range[range.length - 1]; i++) {
    if (number % i !== 0) {
      return false;
    }
  }

  return true;
}

smallestCommons([1, 5]);
