//Create an array of your five favorite fruits and log each one using a loop.
const fruits = ['grapes','oranges','apples','avocados','mangoes'];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//Write a program that adds a new item to an array and then removes the first item.
// Log the updated array.

fruits.push('pineapples');
console.log(fruits);

fruits.shift();
console.log(fruits);

//Use JavaScript to find the index of a specific item in an array. If the item is not found, log a suitable message.

let index = fruits.indexOf('bananas');

if(index === -1){
    console.log("The item is not in the array");
}else{
    console.log("The item is in the array");
}
console.log(index);
