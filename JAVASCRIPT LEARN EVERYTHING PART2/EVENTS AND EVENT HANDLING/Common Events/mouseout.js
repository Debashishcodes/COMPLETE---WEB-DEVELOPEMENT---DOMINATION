let parent = document.getElementById("parent");
parent.addEventListener("mouseout",()=>{
    console.log("out");
})
let child = document.getElementById("child");
child.addEventListener("mouseout",()=>{
    console.log("out");
})