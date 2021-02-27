function sumFibs(num) {
  let fibSequence = fibonacciSequence(num);
  let oddFibSequence = fibSequence.filter((elem) => {
    return elem % 2 !== 0;
  });

  let sum = oddFibSequence.reduce((a, b) => a + b, 0);
  return sum;
}

function fibonacciSequence(num) {
  let result = [1, 1];

  while (result[result.length - 1] <= num) {
    let newNumber = result[result.length - 1] + result[result.length - 2];
    result.push(newNumber);
  }
  result.pop();

  return result;
}
