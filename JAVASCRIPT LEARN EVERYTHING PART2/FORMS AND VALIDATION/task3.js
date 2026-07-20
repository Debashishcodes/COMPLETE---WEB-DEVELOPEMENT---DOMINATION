const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

function validateEmail(){
    const emailValue = emailInput.value.trim();
    if(emailValue === ""){
        emailError.innerText = "email is required";
        return false;
    }
    else{
        emailError.innerText = "";
        return true;
    }
}

function validatePassword(){
    const passwordValue = passwordInput.value.trim();
    if(passwordValue === ""){
        passwordError.innerText = "Password can not be empty"; 
        return false;
    }
    if(passwordValue.length < 8){
        passwordError.innerText = "Password must contain at least 8 characters."     ;
        return false;
    }
    else{
        passwordError.innerText = "";
        return true;
    }
}

emailInput.addEventListener("blur",()=>{
    validateEmail();
});
emailInput.addEventListener("input",()=>{
    validateEmail();
});

passwordInput.addEventListener("blur",()=>{
    validatePassword();
});
passwordInput.addEventListener("input",()=>{
    validatePassword();
});

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(validateEmail() && validatePassword()){
        console.log("Login Success");
    }
    
});
