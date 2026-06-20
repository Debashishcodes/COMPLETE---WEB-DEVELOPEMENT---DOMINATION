## ARRAYS
let arr = [1,2,3]; or let arr = new Array();
arr[0]=1;
arr[10]=undefined;

# Array methods : push pop shift unshift splice slice reverse sort 
 push - add new element at the right most position of array 
 pop - remove last element from the array 
 shift - remove the first element from the array 
 unshift - adds new element at the first position of the array
 splice - arr.slice(2,1) : it removes only 1 element at 2nd position of the array 
 slice - 
 reverse - reverse the entire array 
 sort - sort the array in either ascending order or descending order
 # map , flter ,recuce, find ,some ,every 
# forEach - it works once for each element present in the array
 let arr = [11,62,3,4,25];
 let na = arr.forEach(function(val){
	console.log(val + 5);
 })

*map*
let arr = [11,62,3,4,25];

// map srf tab use karna hai jab apko ek naya array baanana hai pichle array ke basis par
// map dikhte hi man main ek blank array bana liya karo


example - 1:
let newarr = arr.map(function(val){
	return 12;
})

o/p - arr = [12,12,12,12,12];

example-2:
let newarr = arr.map(function(val){
	if(val>10) return val;
})

o/p - arr = [11,62,undefined,undefined,25];

*filter* - here you have to return true or false based on condition
let arr = [1,2,3,4,5,6,7,8];
let newarr = arr.filter(function(val){
	if(val>4) return true;
})


*reduce*
let arr = {1,2,3,4,5,6};
let ans = arr.reduce(function(accumulator,val){
	return accumulator + val;
},0);

*find*
let ans = arr.find(function(val){
	return val == 1;
})

*some* - it gives true or false
let arr = [10,32,60,90];
let ans = arr.some(function(val){
	return val > 85;
})

*every*
let arr = [10,30,32,90];

let ebe = arr.every(function(val){
	return val > 5 - this will give true 
	return val > 15 - this will give false there is one element which is less than 15 
})

# Destrcturing an spread operator

let arr = [1,2,3,4,5];
let [a,b,,c] = arr;
o/p -  1 2 4

