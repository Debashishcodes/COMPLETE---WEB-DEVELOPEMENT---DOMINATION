let abc=document.querySelector("select");
let dev = document.querySelector("#device");

abc.addEventListener("change",function(dets){
    device.textContent=`${dets.target.value} Device Selected`;
});