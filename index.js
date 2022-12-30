// Practice: creating and manipulating arrays
// Purpose: Practice creating arrays, manipulating arrays:
// Describe: Write a JavaScript program to add element in an array and display them.

// let number = [];
// function add() {
//     let input = document.getElementById("input").value;
//     number.push(input);
//     document.getElementById("input").value = '';
    
// }

// function display() {
//     let h = "<hr/ style='width:23%; margin-left:0px'>";
//     for (i = 0; i < number.length; i++){
//         h += 'Element ' + i + ' = ' + number[i] + "<br/>";
//     }
//     document.getElementById("result").innerHTML = h;

// }


// Practice: Find value in array
// Purpose: Practice creating arrays, manipulating array:
// Describe: Write a JavaScript program to find out if a value entered from the dialog is in the array. If yes, print the position of that element.

// let value = parseInt(prompt("Enter a number"));

// let numbers = [1, 3, 5, 7, 8, 2, 11, 14, 15, 17, 20];

// for (i = 0; i < numbers.length; i++) {
//     if (value == numbers[i]) {
//         alert("Value " + numbers[i] + " found at " + i);
//         break;
//     } 
// }

// Practice: Find the largest value in an array.
// Purpose: Practice creating arrays, manipulating arrays.
// Describe: Write a JavaScript program to find the maximum value in a given array.


// let numbers = [1, 4, 3, 40, 18, 19, 50, 10, 25, 30];
// let max = numbers[0];
// let index = 0;
// for (i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//         index = i;
//     }
    
// }
// alert("Max is " + max + " at position " + index );


// Practice: Finding the largest or smallest value.
// Target: Practice using the search algorithm to find the minimum/ maximum value.
// Describe: Computer programming problems often involve finding minimum and maximum values. In a sorted data structure, finding these values is a chore.
// However, searching on an unclassified data structure is a more difficult task.

// Min:

// function findMin(arr) {
//     let min = arr[0];
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// Max:
// function findMax(arr) {
//     let max = arr[0];
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let numbers = [];
// for (i = 0; i < 100; i++) {
//     numbers[i] = Math.floor(Math.random() * 100);
    
// }
// //console.log(numbers)
// let minValue = findMin(numbers);
// document.write("The minimum is " + minValue);
// document.write ("<br/>");
// let maxValue = findMax(numbers);
// document.write("The maximum is " + maxValue);




// Practice: Reverse the element in an array.
// Purpose: Practice creating, manipulating arrays.
// Describe: Write a JavaScript program that reverse the values in a given array. Don't use reverse() method.

// The way 1:
// let numbers = [-3,5,1,3,2,10];
// let newNumbers = numbers.reverse();
// document.write(newNumbers);

// The way 2:
// let numbers = [-3, 5, 1, 3, 2, 10];
// let newNumbers =[];
// for(i = numbers.length-1; i >= 0; i--){
//     newNumbers.push(numbers[i]);
// }
// document.write(newNumbers);

// The way 3: 
// const numbers = [-1, 5, 1, 3, 2, 10];
// numbers.sort(function(){
//     return -1;
// });
// document.write(numbers);
// Write other way:
// const numbers =[1,2,3,4,5];
// numbers.sort(() => -1);
// console.log(numbers);

// The way 4: Use slice and reverse:
// const numbers = [1, 2, 3, 4, 5];
// let newNums = numbers.slice().reverse();
// console.log(newNums);


// The way 5: Use Es6.
// const nums = [1, 2, 3, 4, 5];
// const newNums = [...nums].reverse();
// console.log(nums);
// console.log(newNums);

// The Way 6: Use reduce and spread.
// const nums = ['a', 'b', 'c'];
// let newNums = nums.reduce((accumulator, value) => {
//     return [value, ...accumulator];
// }, []);
// console.log(nums);
// console.log(newNums);

// The Way 7: Use reduceRight and spread.
// const nums = ['t', 'e,', 'f'];
// let newNums = nums.reduceRight((accumulator, value) => {
//     console.log(value);
//     return [...accumulator, value];
// },);
// console.log(newNums);