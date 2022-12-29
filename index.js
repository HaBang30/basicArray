// Practice: creating and manipulating arrays
// Purpose: Practice creating arrays, manipulating arrays:
// Describe: Write a JavaScript program to add element in an array and display them.

let number = [];
function add() {
    let input = document.getElementById("input").value;
    number.push(input);
    document.getElementById("input").value = '';
    
}

function display() {
    let h = "<hr/>";
    for (i = 0; i < number.length; i++){
        h += 'Element ' + i + ' = ' + number[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = h;

}