const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("pass")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(email.value===""){
        console.log("Invalid Email");
        return;
    }
    if(password.value.length<8){
        console.log("pasword length is too small");
        return;
    }
    console.log("form valid");
});