let btn = document.getElementById("btn");
btn.addEventListener("click",(e)=>{
    console.log(e.target.innerText);
    console.log(e.target.id);
});
