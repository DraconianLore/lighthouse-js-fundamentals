const makeCase = function(input, style) {
  let beingConverted = input;
  // Convert to camel function
  let toCamel = function(toConvert) {
    let goingUP = false;
    let converted = '';
    let whichChar = 0;
    while (whichChar < toConvert.length) {
      if (toConvert[whichChar] == ' ') {
        goingUP = true;
        whichChar++;
      } else (goingUP = false);
      if (goingUP == true) {
        converted += toConvert.charAt(whichChar).toUpperCase();
        whichChar++;
      } else {
        converted += toConvert[whichChar];
        whichChar++;
      }
    }
    return (converted);
  };
  // Convert to pascal function
  let toPascal = function(toConvert) {
    return (toCamel(' ' + toConvert));
  };
  // Convert to snake function
  let toSnake = function(toConvert) {
    let converted = '';
    let whichChar = 0;
    while (whichChar < toConvert.length) {
      if (toConvert[whichChar] == ' ') {
        converted += '_';
        whichChar++;
      } else {
        converted += toConvert[whichChar];
        whichChar++;
      }
    }
    return (converted);
  };
  // Convert to kebab function
  let toKebab = function(toConvert) {
    let converted = '';
    let whichChar = 0;
    while (whichChar < toConvert.length) {
      if (toConvert[whichChar] == ' ') {
        converted += '-';
        whichChar++;
      } else {
        converted += toConvert[whichChar];
        whichChar++;
      }
    }
    return (converted);
  };
  // Convert to title function
  let toTitle = function(toConvert) {
    let goingUP = false;
    let whichChar = 0;
    converted = toConvert.charAt(whichChar).toUpperCase();
    whichChar++;
    while (whichChar < toConvert.length) {
      if (toConvert[whichChar] == ' ') {
        goingUP = true;
        converted += ' ';
        whichChar++;
      } else (goingUP = false);
      if (goingUP == true) {
        converted += toConvert.charAt(whichChar).toUpperCase();
        whichChar++;
      } else {
        converted += toConvert[whichChar];
        whichChar++;
      }
    }
    return (converted);
  };
  // Convert vowels function
  let toVowels = function(toConvert) {
    let converted = '';
    let whichChar = 0;
    let aVowel = ['a', 'e', 'i', 'o', 'u'];
    while (whichChar < toConvert.length) {
      let currentChar = toConvert[whichChar];
      if (currentChar == 'a'
        || currentChar == 'e'
        || currentChar == 'i'
        || currentChar == 'o'
        || currentChar == 'u') {
        converted += toConvert.charAt(whichChar).toUpperCase();
        whichChar++;
      } else {
        converted += toConvert[whichChar];
        whichChar++;
      }
    }
    return (converted);
  };
  // Convert Consonants function
  let toConsonants = function(toConvert) {
    let converted = '';
    let whichChar = 0;
    let aVowel = ['a', 'e', 'i', 'o', 'u'];
    while (whichChar < toConvert.length) {
      let currentChar = toConvert[whichChar];
      if (currentChar == 'a'
        || currentChar == 'e'
        || currentChar == 'i'
        || currentChar == 'o'
        || currentChar == 'u') {
        converted += toConvert[whichChar];
        whichChar++;
      } else {
        converted += toConvert.charAt(whichChar).toUpperCase();
        whichChar++;
      }
    }
    return (converted);
  };
  // Convert to uppercase
  let toUpper = function(toConvert) {
    let converted = '';
    let whichChar = 0;
    while (whichChar < toConvert.length) {
      converted += toConvert.charAt(whichChar).toUpperCase();
      whichChar++;
    }
    return (converted);
  };
  // Convert to lowercase
  let toLower = function(toConvert) {
    let converted = '';
    let whichChar = 0;
    while (whichChar < toConvert.length) {
      converted += toConvert.charAt(whichChar).toLowerCase();
      whichChar++;
    }
    return (converted);
  };
  if (!Array.isArray(style)) {
    style = [style];
  }
  for (i = 0; i < style.length; i++) {
    switch(style[i]) {
      case "camel":
        beingConverted = toCamel(beingConverted);
        break;
      case 'pascal':
        beingConverted = toPascal(beingConverted);
        break;
      case 'snake':
        beingConverted = toSnake(beingConverted);
        break;
      case 'kebab':
        beingConverted = toKebab(beingConverted);
        break;
      case 'title':
        beingConverted = toTitle(beingConverted);
        break;
      case 'vowel':
        beingConverted = toVowels(beingConverted);
        break;
      case 'consonant':
        beingConverted = toConsonants(beingConverted);
        break;
      case 'upper':
        beingConverted = toUpper(beingConverted);
        break;
      case 'lower':
        beingConverted = toLower(beingConverted);
        break;
      default:
        console.log('Invalid Input');
        break;
    }
  }
  console.log(beingConverted);
  return (beingConverted);
};


makeCase("this is a string", "camel");
makeCase("this is a string", "pascal");
makeCase("this is a string", "snake");
makeCase("this is a string", "kebab");
makeCase("this is a string", "title");
makeCase("this is a string", "vowel");
makeCase("this is a string", "consonant");
makeCase("this is a string", ["upper", "snake"]);
