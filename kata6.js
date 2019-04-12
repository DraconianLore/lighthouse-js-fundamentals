let repeatNumbers = function(data) {
  let workingNumbers = [];
  let returnNumbers = [];
  let workingCount = data[0];
  while (data.length > 0) {
    workingNumbers = "";
    for (i = 0; i < workingCount[1]; i++) {
      workingNumbers += workingCount[0];
    }
    returnNumbers.push(workingNumbers);
    data.shift();
    workingCount = data[0];
  }
  return returnNumbers;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
