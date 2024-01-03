const generateBtn = document.querySelector('.generate-pw_btn');
const suggestions = document.querySelectorAll('.suggestion');
const passwordLength = document.querySelector('.textfield');


let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*-_=+,.?".split('');

generateBtn.addEventListener('click', () => {
    suggestions.forEach((suggestion) => {
        suggestion.textContent = generatePassword();
        suggestion.addEventListener('click' ,() => {
            copy(suggestion.textContent);
        });
    });
});


function generatePassword() {
    let password = [];
    for (let i = 0; i < +passwordLength.value; i++) {
        password.push(chars[getRandomIndex()]); 
    }
    return password.join('');
}

function getRandomIndex() {
    return Math.floor(Math.random() * chars.length - 1);
}

function copy(pw) {
    navigator.clipboard.writeText(pw);
}