const pwdg = document.getElementById("pw");
const copy = document.getElementById("copy");
const lenEle = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbols");
const generatepw = document.getElementById("generate");

const UpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';

function getUpperCase() {
    return UpperLetters[Math.floor(Math.random() * UpperLetters.length)];
}

function getLowerCase() {
    return LowerCaseLetters[Math.floor(Math.random() * LowerCaseLetters.length)];
}

function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}


function generatePassword() {

    const len = lenEle.value;

    let password = '';

    if (upper && upper.checked) {

        password += getUpperCase();
    }

    if (lower && lower.checked) {
        password += getLowerCase();

    }

    if (number && number.checked) {
        password += getNumbers();
    }

    if (symbol && symbol.checked) {
        password += getSymbols();
    }

    for (let i = password.length; i < len; i++) {

        const x = generateX();
        password += x;

    }
    pwdg.innerText = password;

}

function generateX() {
    const xs = [];
    if (upper && upper.checked) {
        xs.push(getUpperCase());
    }

    if (lower && lower.checked) {
        xs.push(getLowerCase());
    }

    if (number && number.checked) {
        xs.push(getNumbers());
    }

    if (symbol && symbol.checked) {
        xs.push(getSymbols());
    }

    if (xs.length === 0) {
        return "";
    }
    return xs[Math.floor(Math.random() * xs.length)];
}

generatepw.addEventListener("click", generatePassword);

// copy password

let copyEle = document.getElementById("copy");
copyEle.addEventListener("click", () => {
    const textarea = document.createElement('textarea');

    const password = pwdg.innerText;
    if (!password) {
        return;
    }
    textarea.value = password
    textarea.select();
    document.execCommand('copyEle');
    textarea.remove();
    alert('Password copied to clipboard');
});
