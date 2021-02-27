function uniteUnique(arr) {
  let result = [];

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (result.indexOf(arguments[i][j]) === -1) {
        result.push(arguments[i][j]);
      }
    }
  }
  return result;
}

console.log(uniteUnique());
