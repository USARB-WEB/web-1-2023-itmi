const students = [
    {
        "name": "Ion",
        "salary": 1000
    },
    {
        "name": "Ana",
        "salary": 1200
    },
    {
        "name": "Mihai",
        "salary": 899
    }
];

console.log('All students');
console.log(students);
console.log('Students with salary >= 1000');
console.log(students.filter(student => student.salary >= 1000));
console.log('Increase students salary by 100');
console.log(students.map(student => {
    return{
        name: student.name,
        salary: student.salary + 100
    }
}));

