function myReplace(str, before, after) {
  const newAfter = casePreProcessing(before, after);
  return str.replace(before, newAfter);
}

function isUpperCase(a) {
  return a === a.toUpperCase();
}

function casePreProcessing(before, after) {
  let beforeArr = before.split("");
  let afterArr = after.split("");

  if (isUpperCase(beforeArr[0])) {
    afterArr[0] = afterArr[0].toUpperCase();
  } else {
    afterArr[0] = afterArr[0].toLowerCase();
  }

  return afterArr.join("");
}
