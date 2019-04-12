let camelCase = function(input) {
  let goingUP = false;
  let toCamelCase = "";
  let whichChar = 0;
  while (whichChar < input.length) {
    if (input[whichChar] == " ") {
      goingUP = true;
      whichChar++;
    } else (goingUP = false);
    if (goingUP == true) {
      toCamelCase += input.charAt(whichChar).toUpperCase();
      whichChar++;
    } else {
      toCamelCase += input[whichChar];
      whichChar++;
    }
  }
  return (toCamelCase);
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
