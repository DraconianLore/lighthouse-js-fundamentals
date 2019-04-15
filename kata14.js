const squareCode = function(message) {
  let noSpaces = '';
  let charsPerLine;
  let currentString = '';
  let halfDone = [];
  let convertedMessage = '';
  let lettersInSequence = 0;
  let currentChar = 0;
  // remove spaces
  for (i = 0; i < message.length; i++) {
    if (message[i] != ' ') {
      noSpaces += message[i];
    }
  }
  // Convert into box array
  charsPerLine = Math.ceil(Math.sqrt(noSpaces.length));
  while (currentChar < noSpaces.length) {
    if (lettersInSequence == charsPerLine) {
      halfDone.push(currentString);
      currentString = '';
      lettersInSequence = 0;
    } else {
      currentString += noSpaces[currentChar];
      if (currentChar +1 == noSpaces.length) {
        halfDone.push(currentString);
        currentString = '';
        lettersInSequence = 0;
        currentChar++;
      } else {
        currentChar++;
        lettersInSequence++;
      }
    }
  }
  // Convert box array into new strings
  lettersInSequence = 0;
  for (i = 0; i < charsPerLine; i++) {
    for (c = 0; c < charsPerLine; c++) {
      if (halfDone[c]) {
        convertedMessage += halfDone[c].charAt(lettersInSequence);
      }
    }
    convertedMessage += ' ';
    lettersInSequence++;
  }
  return (convertedMessage);
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
