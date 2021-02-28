function steamrollArray(arr) {
  let outerResult = [];

  function recSteamrollArray(arr) {
    if (Array.isArray(arr) === false) {
      outerResult.push(arr);
      return;
    } else {
      arr.forEach((num) => {
        recSteamrollArray(num);
      });
    }

    return outerResult;
  }

  arr.forEach((elem) => {
    recSteamrollArray(elem);
  });

  return outerResult;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
