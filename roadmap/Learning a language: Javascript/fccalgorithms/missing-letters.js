function fearNotLetter(str) {
  let strArr = str.split("");

  let startRange = strArr[0];
  let finishRange = strArr[strArr.length - 1];

  let startIndex = lettersArr.indexOf(startRange);
  let finishIndex = lettersArr.indexOf(finishRange);

  for (let i = startIndex, j = 0; i <= finishIndex; i++, j++) {
    if (strArr[j] !== lettersArr[i]) {
      return lettersArr[i];
    }
  }

  return undefined;
}

console.log(fearNotLetter("bcdf"));
