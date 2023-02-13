console.log("Number");
const x = 4;
const y = 3.14;

console.log('String');
const doubleQuotedString = "I am a double quoted string " + x + ", some text";
const singleQuotedString = 'I am a single quoted string ' + x + ', some text';
const backticksString = `I am a string with backticks ${x}, some text`;
console.log(doubleQuotedString);
console.log(singleQuotedString);
console.log(backticksString);

console.log("Boolean");
const trueValue = true;
const falseValue = false;

console.log(trueValue + falseValue);
console.log(trueValue / falseValue);

console.log("Array");
const emptyArray = [];
const numbers = [1, 4, 2, -5];
const letters = ['a', 'b', 'c'];
const words = ['hello', 'world'];
const booleans = [true, false, false];
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(emptyArray);
console.log(numbers);
console.log(letters);
console.log(words);
console.log(booleans);
console.log(matrix);

console.log(numbers[2]);
console.log(matrix[1][1]);

console.log('Object');

const firstName = "Ion";
const lastName = "Creanga";
const age = 23;

const person = {
    firstName: "Ion",
    lastName: "Creanga",
    age: 23
}

console.log(person);
console.log(person.firstName);
