function lastIndexOf(toCheck, toFind){

  var placeCheck = toCheck.length - 1;
  while (placeCheck >= 0){
    if (toCheck[placeCheck] == toFind){
      return placeCheck;
    }
    placeCheck--;

  }
  return(-1);

}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([5], 5), "=?", -1);

