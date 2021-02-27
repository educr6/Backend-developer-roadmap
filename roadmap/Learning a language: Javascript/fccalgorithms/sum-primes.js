function sumPrimes(num) {
  let numbers = generateNumberRange(num);

  console.log(numbers);
  numbers = numbers.filter((elem) => {
    return isPrime(elem);
  });
  console.log(numbers);

  const primeSum = numbers.reduce((a, b) => {
    return a + b;
  });

  console.log(primeSum);
  return primeSum;
}

function isPrime(num) {
  if (num === 1 || num === 2) {
    return true;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function generateNumberRange(num) {
  let result = [];
  for (let i = 2; i <= num; i++) {
    result.push(i);
  }
  return result;
}

sumPrimes(10);
