function ageCalculator(name, yearOfBirth, currentYear){
let yearsOld = (currentYear - yearOfBirth);
  return(name + " is " + yearsOld + " years old.");
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));