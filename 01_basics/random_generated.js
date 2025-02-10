// let randomNumber = Math.floor(Math.random()*26+65);
// let charFromNumber = String.fromCharCode(randomNumber);

function generatePassword(length){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = ""
    for (let i = 0; i < length; i++) {
         let char = Math.floor(Math.random()*chars.length);
         password+=chars[char];
    }
    return password;
}
console.log(generatePassword(10));