# Objects
let object = {
	name : "deep",
	age: 25,
};
console.log(object.name);
console.log(object['name']);

# 1. Key value strcture 
in the above example name is key , deep is value 
# 2. dot vs bracket notation 
see the above two console.log statements 

# 3. Nesting and deep access
const user = {
	name:"debashish",
	adress:{
		city:"ctc",
		pin:754012,
		location:{
			lat:23.2,
			lng:77.4,
		},
	},
};
user.adress.location.lng();
# 4.object destrcturing - it is used a lot in backend and react 
suppose you need to access the lat and lng so many times you will write the 
user.adress.location.lng as so many and it is not fair so,

let{lat,lng}=user.adress.location;

# 5. Looping: for-in , object.keys , object.entries

*a* for-in....

let obj = {
    name : "debashish",
    age : 20,
    email: "debashishs969@gmail.com",
};
for(let key in obj){
    console.log(key,obj[key]);
}
o/p=
name debashish
age 20
email debashishs969@gmail.com


*object.keys* - it gives the all the keys inside the object and returns in the array
let obj = {
    name : "debashish",
    age : 20,
    email: "debashishs969@gmail.com",
};
console.log(Object.keys(obj));
o/p = 
[ 'name', 'age', 'email' ]


*object.entries* - it gives arrays of arrays
let obj = {
    name : "debashish",
    age : 20,
    email: "debashishs969@gmail.com",
};
console.log(Object.entries(obj));
o/p=
[
  [ 'name', 'debashish' ],
  [ 'age', 20 ],
  [ 'email', 'debashishs969@gmail.com' ]
]
# 6. Copying objects : spread , Object.assign , deep clone
*spread*
let obj1 = {
    name:"deb",
    age:20,
    sex: "male",
};
let obj2 ={...obj};
console.log(obj2.name);
*Object.assign*
let obj1 = {
    name:"deb",
    age:20,
    sex: "male",
};
let obj2 =Object.assign({},obj);
console.log(obj2.name);
*deep clone*
A deep clone in JavaScript creates a completely independent copy of an object or array, including all of its nested objects and properties. This ensures that changing a value in the cloned object will never affect the original object, because they do not share any memory references.


let obj = {
	name:"debashish",
	adress:{
		city:"ctc",
		pin:754012,
		location:{
			lat:23.2,
			lng:77.4,
		},
	},
};
let obj2 = {...obj};
obj2.adress.city = "bbsr";
here if i change the object2 adress to bbsr it will also change the adress of object1 so we use deep clone

let obj2 = JSON.parse(JSON.stringyfy(obj));

# Optional chaining , computed properties
let role = admin;

let obj = {
	name:"debashish",
	age:25,
	[role]:"divya",
};
