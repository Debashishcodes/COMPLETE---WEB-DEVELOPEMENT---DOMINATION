const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

function validateEmail(){

}

function validatePassword(){

}
email.addEventListener("blur",()=>{
    
});
emailError.addEventListener("input",()=>{

});

password.addEventListener("blur",()=>{

});
password.addEventListener("input",()=>{

});

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(validateEmail()){
        console.log("Login Success");
    }
    
});