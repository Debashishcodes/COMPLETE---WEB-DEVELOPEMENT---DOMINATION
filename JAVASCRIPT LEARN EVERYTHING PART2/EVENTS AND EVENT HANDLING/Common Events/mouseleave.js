let parent = document.getElementById("parent");
parent.addEventListener("mouseleave",()=>{
    console.log("PARENT");
})
let child = document.getElementById("child");
child.addEventListener("mouseleave",()=>{
    console.log("CHILD");
})
