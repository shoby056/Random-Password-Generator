var password= document.getElementById("password");
function genPassword(){

var chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength=5;
var password="";
for(var i=0;i<= passwordLength;i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber,randomNumber +1);
}
//now apply it

document.getElementById("password").value = password;

}
//now active copy button

function copyPassword() {
    var copyText=  document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand("copy");
}