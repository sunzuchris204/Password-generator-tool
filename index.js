const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1 = document.getElementById('content1')
let pass2 = document.getElementById('content2')

let newPassword = ''
let newPassword2 = ''
let passwordLength = 15

function generateRandomchar() {
    for(let i = 0;i < passwordLength; i++) {
    let randomChar = Math.floor(Math.random()*characters.length)
    newPassword += characters[randomChar]
    pass1.innerHTML = newPassword
    console.log(pass1.textContent);
    }
    for(let i = 0;i < passwordLength; i++) {
    let randomChar = Math.floor(Math.random()*characters.length)
    newPassword2 += characters[randomChar]
    pass2.textContent = newPassword2
    // console.log(newPassword)
    }
}



