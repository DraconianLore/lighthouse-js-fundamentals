const multiplicationTable = function(maxValue) {
  let multiTable = '';
  let currenrWorking = '';

  for (i = 1; i <= maxValue; i++) {
    for (x = 1; x <= maxValue; x++) {
      currenrWorking = i * x;
      multiTable += ' ' + currenrWorking;
      if (x == maxValue) {
        multiTable += '\n';
      }
    }
  }
  return (multiTable);
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
