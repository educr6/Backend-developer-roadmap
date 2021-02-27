const basePairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

function pairElement(str) {
  let result = [];
  let strArr = str.split("");

  strArr.forEach((elem) => {
    result.push([elem, basePairs[elem]]);
  });

  return result;
}
