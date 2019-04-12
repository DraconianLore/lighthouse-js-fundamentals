const urlDecode = function(text) {
  let decodedString = {};
  let workingString1 = '';
  let workingString2 = [];
  text += '=';
  // Remove %20's and put all inputs into an array for sorting
  for (i = 0; i < text.length; i++) {
    if (text[i] == '%') {
      workingString1 += ' ';
      i = i+3;
    }
    if (text[i] != '=') {
      if (text[i] == '&') {
        workingString2.push(workingString1);
        workingString1 = '';
      } else {
        workingString1 += text[i];
      }
    } else {
      workingString2.push(workingString1);
      workingString1 = '';
    }
  }
  // Convert arrays into objects
  for (c = 0; c < workingString2.length -1; c = c + 2) {
    decodedString[workingString2[c]] = workingString2[c+1];
  }
  return (decodedString);
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
