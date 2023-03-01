// MOUSE
// click
document.getElementById('clickButton').addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});
//double click
document.getElementById('doubleClickButton').addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'blue';
});

//mouse over
let mouseOverCounter = 1;
document.getElementById('mouseOverAndOutButton').addEventListener('mouseover', () => {
    document.getElementById('mouseOverAndOutButton').innerHTML = `MOUSE OVER ${mouseOverCounter}`;
    mouseOverCounter+=2;
});

document.getElementById('mouseOverAndOutButton').addEventListener('mouseout', () => {
    document.getElementById('mouseOverAndOutButton').innerHTML = `MOUSE OUT ${mouseOverCounter}`;
    mouseOverCounter-=1;
});

let mouseMoveCounter = 1;
document.getElementById('mouseMoveButton').addEventListener('mousemove', () => {
    document.getElementById('mouseMoveButton').innerHTML = `MOUSE MOVE ${mouseMoveCounter}`;
    mouseMoveCounter++;
});

// KEYBOARD


document.getElementById('keyDownAndUpEventInput').addEventListener('keydown', () => {
    document.getElementById('keyDownAndUpEventInput').value = 'KEY DOWN';
})

document.getElementById('keyDownAndUpEventInput').addEventListener('keyup', () => {
    document.getElementById('keyDownAndUpEventInput').value = 'KEY UP';
})

document.getElementById('keyDownAndUpEventInput').addEventListener('keypress', () => {
    document.getElementById('keyDownAndUpEventInput').value = 'KEY PRESS';
})

document.getElementById('inputEvent').addEventListener('input', () => {
    document.getElementById('inputEvent').value = document.getElementById('inputEvent').value + 'input';
})

//key event

document.getElementById('eventKeyHandle').addEventListener('keydown', (event) => {
    document.getElementById('keyCode').innerHTML = event.keyCode;
    console.log(event.keyCode);
    if(event.keyCode === 38){
        document.getElementById('keyCode').innerHTML = 'ARROW UP PRESSED'
    }
}); 


//TIME events

setTimeout(() => {
    document.body.style.backgroundColor = 'green';
}, 1000);

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'cyan'];

let currentColorIndex = 0;
setInterval(() => {
    document.body.style.backgroundColor = colors[currentColorIndex];
    if(currentColorIndex < colors.length - 1){
        currentColorIndex++;
    } else {
        currentColorIndex = 0;
    }

}, 5)
