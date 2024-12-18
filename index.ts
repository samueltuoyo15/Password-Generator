let generateBtn = document.querySelector('#generate-btn') as HTMLElement;
let copyBtn = document.querySelector('.password-container .btn') as HTMLElement;
let generatedPassword = document.querySelector('#generated-password') as HTMLElement;

function handleGenerate(){
  let Length = parseInt((document.getElementById('length') as HTMLInputElement).value);
  let Lowercase = (document.getElementById('lowercase') as HTMLInputElement).checked;
  let Uppercase = (document.getElementById('uppercase') as HTMLInputElement).checked;
  let Numbers = (document.getElementById('number') as HTMLInputElement).checked;
  let Symbols = (document.getElementById('symbol') as HTMLInputElement).checked;
  
  let characterSet = "";
  
  if(Length) characterSet += "abcdefghijklmnopqrstuvwxyz";
  
  if(Uppercase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  if(Numbers) characterSet += "0123456789";
  
  if(Symbols) characterSet += "*@#$_&-+()/?!;:':%©®™✓[]}\=§∆π√•~|£€¥√¥^°~";
  
  if(!characterSet || Length === 0){
  alert('Please Select at least one character type'); 
  return;
  }
  
  let password = "";
  
  for(let i = 0; i < Length; i++){
    let randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }
  
  generatedPassword.textContent = password.toString();
}

generateBtn.addEventListener("click", handleGenerate);