const email = document.getElementById("Email");
const emailError = document.getElementById("emailError");

email.addEventListener("blur",()=>{
    if(email.value.trim()===""){
        emailError.innerText = "Email is required";
    }
    else{
            emailError.innerText = "";
    }
});