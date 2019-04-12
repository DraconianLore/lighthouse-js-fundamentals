function merge(arrayOne, arrayTwo) {
  let finalArray = [];
  while (arrayOne.length > 0) {
    if (arrayTwo[0] <= arrayOne[0]) {
      finalArray.push(arrayTwo[0]);
      arrayTwo.shift();
    } else {
      finalArray.push(arrayOne[0]);
      arrayOne.shift();
    }
  }
  while (arrayTwo.length > 0) {
    finalArray.push(arrayTwo[0]);
    arrayTwo.shift();
  }
  return finalArray;
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
console.log(merge([5], [2,3,10,30]));