const loginForm = document.getElementById("loginForm");
const emailinput = document.getElementById("email");
const emailError = document.getElementById("emailError");
function emailChange(){
    if(emailinput.value.trim()===""){
        emailError.innerText = "Email is required";
        return false;
    }
    else{
        emailError.innerText = "";
        return true;
    }
}
emailinput.addEventListener("blur",()=>{
    emailChange();
});
emailinput.addEventListener("input",()=>{
    emailChange();
});
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(emailChange()){
        console.log("form is valid");
    }
});