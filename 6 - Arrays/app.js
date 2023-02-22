/*
const numbers = [1, 3, 5, 7, 9];
const numbersOnSquare = [];
for(let i = 0; i < numbers.length; i++){
    numbersOnSquare[i] = numbers[i] ** 2;
}
console.log(numbers);
console.log(numbersOnSquare);


console.log(numbers.map(number => number ** 2));
*/


/*
const randomNumbers = [1, 89, 2, 45, -32, -5, 8, 0];
const foundedNumbers = [];
for(let i = 0; i < randomNumbers.length; i++){
    if(randomNumbers[i] % 2 === 0 && randomNumbers[i] > 0){
        foundedNumbers.push(randomNumbers[i]);
    }
}

console.log(randomNumbers);
console.log(foundedNumbers);

console.log(randomNumbers.filter(number => number % 2 === 0 && number > 0));
*/

/*
const salaries = [7000, 8300, 4500, 15000];
let salariesSum = 0; 
for(let i = 0; i < salaries.length; i++){
    salariesSum+=salaries[i];
}

console.log(salaries);
console.log(salariesSum);

console.log(salaries.reduce((previousValue, nextValue) => previousValue + nextValue, 100000));
*/

/*
const sentence = "Hello world!";
console.log(sentence);
let letters = [];
for (let index = 0; index < sentence.length; index++) {
    letters.push(sentence[index]);
}
console.log(letters);

console.log(sentence.split(''));
console.log(letters.join('-'));
*/

const students = ["Ion", "Ana", "Andrei", "Maria", "Mihai"];
console.log(students);
students.push("Ultimul student")
console.log(students);
//Delete array element
students.splice(1, 1);
console.log(students);
//Replace array element
students.splice(1, 1, "Petru");
console.log(students);