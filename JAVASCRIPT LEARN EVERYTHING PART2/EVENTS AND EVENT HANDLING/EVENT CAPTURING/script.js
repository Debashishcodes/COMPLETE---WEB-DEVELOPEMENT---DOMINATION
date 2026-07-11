let parent = document.getElementById("parent");
parent.addEventListener("click",()=>{
    console.log("PARENT");
},true);
let child = document.getElementById("child");
child.addEventListener("click",()=>{
    console.log("CHILD");
},true);