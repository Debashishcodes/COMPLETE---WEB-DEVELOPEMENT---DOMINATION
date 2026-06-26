let inp = document.querySelector("#your-name");
inp.addEventListener("input",function(){
    console.log("typed check");
});

let inp1 = document.querySelector("#your-gf-name");
inp1.addEventListener("input",function(dets){
    if(dets.data!==null){
        console.log(dets.data);
    }
})
