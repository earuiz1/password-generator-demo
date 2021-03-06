
//Declare constants
const submit = document.querySelector('#button-submit');
const length = document.querySelector('#password-length');
const upperCase = document.querySelector('#uppercase');
const lowerCase = document.querySelector('#lowercase');
const number = document.querySelector('#numbers');
const symbol = document.querySelector('#symbols');
const password = document.querySelector('#password');
const copyButton = document.querySelector('#copy-text');

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
    let symbols = '!@#$%^&*(){}<>-_=';
    return symbols[Math.floor(Math.random() * symbols.length)]
}

//Create a function to generate items when the checkboxes are checked
function generateItems() {
    let items = []; 

    //Check if the uppercase box is checked 
    if(upperCase.checked)
    {
        //Push uppercase letter to the array
        items.push(getRandomUpper());
    }

    //Check if the lowercase box is checked 
    if(lowerCase.checked)
    {
        //Push lowercase letter to the array
        items.push(getRandomLower());
    }

    //Check if the number box is checked 
    if(number.checked)
    {
        //Push number to the array
        items.push(getRandomNumber());
    }

    //Check if the symbol box is checked 
    if(symbol.checked)
    {
        //Push symbol to the array
        items.push(getRandomSymbol());
    }

    //If the length of the array is empty (No checkboxes were clicked)
    if(items.length === 0){
        return '';
    }

    return items[Math.floor(Math.random() * items.length)];
}

//Create a function to generate random password
function generatePassword() {
    let len = length.value;
    let pass = '';

    for(let i=0; i< len; i++){
        pass += generateItems();
    }

    password.value = pass;
}

//Create a function to copy the password to the clipboard once the button copy is clicked
function copyPassword(params) {
    let cp = password;

    /* Select the text field */
    cp.select();
    cp.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(cp.value);
    
}

//Check when the button was clicked
submit.addEventListener('click', () => {
    //console.log("Button was clicked!");
    generatePassword();
});








