let calculateChange = function(total, cash) {
  let changeToGive = cash - total;
  let changeBreakdown = {
    twentyDollars: null,
    tenDollars: null,
    fiveDollars: null,
    twoDollars: null,
    oneDollar: null,
    quarter: null,
    dime: null,
    nickel: null,
    penny: null
  };
  while (changeToGive > 2000) {
    changeBreakdown.twentyDollars += 1;
    changeToGive -= 2000;
  }
  while (changeToGive > 1000) {
    changeBreakdown.tenDollars += 1;
    changeToGive -= 1000;
  }
  while (changeToGive > 500) {
    changeBreakdown.fiveDollars += 1;
    changeToGive -= 500;
  }
  while (changeToGive > 200) {
    changeBreakdown.twoDollars += 1;
    changeToGive -= 200;
  }
  while (changeToGive > 100) {
    changeBreakdown.oneDollar += 1;
    changeToGive -= 100;
  }
  while (changeToGive > 25) {
    changeBreakdown.quarter += 1;
    changeToGive -= 25;
  }
  while (changeToGive > 10) {
    changeBreakdown.dime += 1;
    changeToGive -= 10;
  }
  while (changeToGive > 5) {
    changeBreakdown.nickel += 1;
    changeToGive -= 5;
  }
  while (changeToGive > 0) {
    changeBreakdown.penny += 1;
    changeToGive -= 1;
  }

  // Return the change after removing empty values
  for (let objectKey in changeBreakdown) {
    if (changeBreakdown[objectKey] === null) {
      delete changeBreakdown[objectKey];
    }
  }
  return (changeBreakdown);
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
