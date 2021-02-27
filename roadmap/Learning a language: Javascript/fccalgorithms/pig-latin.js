function translatePigLatin(str) {
  let result = "";
  let consonantRegex = /^[^aeiou]+/;
  let consonants = str.match(consonantRegex);

  if (consonants === null) {
    result = str + "w";
  } else {
    result = str.replace(consonants, "") + consonants;
  }

  result = result + "ay";

  return result;
}

let result = translatePigLatin("california");
console.log(result);
result = translatePigLatin("paragraphs");
console.log(result);
result = translatePigLatin("glove");
console.log(result);
result = translatePigLatin("algorithm");
console.log(result);
result = translatePigLatin("eight");
console.log(result);
