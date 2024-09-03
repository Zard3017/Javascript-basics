//ARRAYS

const numbers = [1,2,3,4,5];
const fruits = ['apples','oranges','grapes','peaches'];
console.log(numbers,fruits);

//get one value - Arrays start at 0
console.log(fruits[1]);

//add a value
fruits[4]= 'blueberries'
console.log(fruits);

//add value using push
fruits.push('Guava');
console.log(fruits);

//add to  beginning of the array
fruits.unshift('Bananas');
console.log(fruits);

//remove last value
fruits.pop();
console.log(fruits);

//check if array
console.log(Array.isArray(fruits));
console.log(fruits);