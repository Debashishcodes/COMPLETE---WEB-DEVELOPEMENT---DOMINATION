let abcs=document.querySelector("h1");
function button(){
   abcs.style.color="red";
   para.style.color="yellow";
}
abcs.addEventListener("click",button);
abcs.removeEventListener("click",button);

let para = document.querySelector("p");
para.addEventListener("dblclick",button);