const timer = setTimeout(()=>{
    console.log("Welcome Debashish !!");
},5000);

setTimeout(()=>{
    clearTimout(timer);
},2000);