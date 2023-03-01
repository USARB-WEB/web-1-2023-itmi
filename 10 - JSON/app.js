const person = {
    name: "Ion Creanga",
    age: 33
}

console.log(person);

const personJSON = JSON.stringify(person);
console.log(personJSON);

const numbersJSON = `[1, 2, 3]`;
console.log(numbersJSON);
const numbers = JSON.parse(numbersJSON);
console.log(numbers);

//https://jsoneditoronline.org