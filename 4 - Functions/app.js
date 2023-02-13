console.log("Rezolvarea unei ecuatii patrate");

const a = 1;
const b = 5;
const c = 4;
let x1 = null;
let x2 = null;

console.log(`${a}*x^2+${b}*x+${c}`);


function solveEquationx2(a, b, c){
    const delta = b**2 - 4 * a * c;
    if(delta > 0){
        x1 = (-b - Math.sqrt(delta)) / 2 * a;
        x2 = (-b + Math.sqrt(delta)) / 2 * a;
    } else if(delta === 0){
        x1 = -b / 2 * a;
        x2 = x1;
    }
    return {
        x1, 
        x2
    }
}

const solutions = solveEquationx2(a, b, c);
x1 = solutions.x1;
x2 = solutions.x2;


if(!x1 && !x2){
    console.log('Ecuatia nu are solutii');
} else {
    console.log("Solutiile ecuatiei sunt");
    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
}
