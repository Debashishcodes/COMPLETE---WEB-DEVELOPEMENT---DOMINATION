let parent = document.getElementById("parent");
parent.addEventListener("mouseenter",()=>{
    console.log("PARENT");
})
let child = document.getElementById("child");
child.addEventListener("mouseenter",()=>{
    console.log("CHILD");
})
