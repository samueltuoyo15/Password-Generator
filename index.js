var generateBtn = document.querySelector('#generateBtn');
var copyBtn = document.querySelector('.password-container .btn');
var generatedPassword = document.querySelector('#generated-password');
function handleGenerate() {
    var Length = document.getElementById('length').value;
    var Lowercase = document.getElementById('lowercase').checked;
    var Uppercase = document.getElementById('uppercase').checked;
    var Numbers = document.getElementById('number').checked;
    var Symbols = document.getElementById('symbol').checked;
    var characterSet = "";
    if (Length)
        characterSet += "abcdefghijklmnopqrstuvwxyz";
    if (Uppercase)
        characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (Numbers)
        characterSet += "0123456789";
    if (Symbols)
        characterSet += "*@#$_&-+()/?!;:':%©®™✓[]}\=§∆π√•~|£€¥√¥^°~";
    if (!characterSet) {
        alert('Please Select at least one character type');
        return;
    }
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }
    generatedPassword.textContent = password;
}
generateBtn.addEventListener("click", handleGenerate);
