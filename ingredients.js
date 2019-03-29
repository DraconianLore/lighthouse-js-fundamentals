var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log ("\nFirst loop (while)");

var whichOne = 0;
while(whichOne < ingredients.length) {
  console.log(ingredients[whichOne]);
  whichOne ++;
}
// Write a for loop that prints out the contents of ingredients:
console.log ("\nSecond loop(for)");
for (i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log ("\nThird loop(for)");
for (i = ingredients.length - 1; i >= 0; i--){
  console.log(ingredients[i]);
}