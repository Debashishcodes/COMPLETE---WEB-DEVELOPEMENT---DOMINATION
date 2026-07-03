let parent = document.getElementById("parent");
parent.addEventListener("mouseover", () => {
    console.log("Parent");
});
let child = document.getElementById("child");
child.addEventListener("mouseover", () => {
    console.log("Child");
});