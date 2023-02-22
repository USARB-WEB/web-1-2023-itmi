// Create new element and insert into page

const nameInputElement = document.createElement('input');
nameInputElement.placeholder = "Please input your name";
nameInputElement.style.backgroundColor = 'cyan';
nameInputElement.addEventListener('input', () => {
    if(nameInputElement.value){
        document.getElementById('nameContainer').style.display = 'block';
        document.getElementById('userName').innerHTML = nameInputElement.value;
        document.getElementById('registerButton').disabled = false;
    } else {
        document.getElementById('nameContainer').style.display = 'none';
        document.getElementById('registerButton').disabled = true;
    }
    
})

document.getElementById('registerButton').addEventListener('click', () => {
    document.getElementById('message').style.display = 'block';
    setTimeout(() => {
        document.getElementById('message').style.display = 'none';
        nameInputElement.value = '';
        document.getElementById('nameContainer').style.display = 'none';
        document.getElementById('registerButton').disabled = true;
    }, 3000)
})


document.getElementById('nameQuestion').append(nameInputElement)