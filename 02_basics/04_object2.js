// object through the singleton (constructor method)

// const tinderuser ={} // non singleton object 

 const tinderuser = new Object();

 tinderuser.id = "123abc"
 tinderuser.name = "sammy"
 tinderuser.isloogedin = "false"
 

 console.log(tinderuser);

//   object nesting object inside a object  and how to use a nested object 

const regularuser ={
    email:"sahil@gmail.com",
    fullname:{
           userfullname:{
            firstname:"sahil",
            lastname:"padaliya"
           }
    }
}
// console.log(regularuser.fullname); // obect value can be access 
// console.log(regularuser.fullname.userfullname.firstname);// object nested value can be access easily

// ----------------------OBJECT COMBINE --------------------------

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a",4:"b"};

// const obj3 ={obj1,obj2};
// console.log(obj3);// same array type hogya object ke ander object 

// 2) 2 way to combine the object 

const obj4 = Object.assign(obj1,obj2);
console.log(obj4)

const obj5 = Object.assign({},obj1,obj2);
console.log(obj5)

