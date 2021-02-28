function addTogether() {
  if (!Number.isInteger(arguments[0])) {
    return undefined;
  }

  if (arguments[1] !== undefined && !Number.isInteger(arguments[1])) {
    return undefined;
  }

  if (Number.isInteger(arguments[1])) {
    return arguments[0] + arguments[1];
  } else {
    const firstNumber = arguments[0];
    return function Sum(num) {
      if (!Number.isInteger(num)) {
        return undefined;
      }

      return num + firstNumber;
    };
  }
}

console.log(addTogether(5)(7));
