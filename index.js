// alert("Working");

const submit = document.querySelector('#button-submit');

//Check when the button was clicked
submit.addEventListener('click', () => {

    console.log("Button was successfuly clicked!");
    console.log(getRandomUpper() + getRandomLower() + getRandomSymbol() + getRandomNumber());


});

//Create a function to get a random lowercase letter 
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Create a function to get a random uppercase letter 
function getRandomUpper() {
     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Create a function to get a random number from 0 to 10
function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

//Create a function to get a random symbol 
function getRandomSymbol() {
    let symbols = '!@#$%^&*(){}<>-_='
    return symbols[Math.floor(Math.random() * symbols.length)]
}


