 const descriptor= Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);

// ------------------------------------------------------------------------------------
// the example has taken that the value of the pi is constant at all the time even if we 
// are changing to it then also it doesnt change at all but by using the some method 
// we can change the property ,variable or function value can be change according to the 
// ourselves 

// console.log(Math.PI);
// Math.PI= 4;
// console.log(Math.PI);


// ------------------------------------------------------------------------------------

// now we are changing the value or function propety that is working for ourself and 
// and that it has customuized for the ourselves 

const chai ={
    name:"ginger chai",
    price:"250",
    isAvailable:true,
    
    orderchai: function(){
     console.log( "CHAI HI NAHI BNI HAI " )
    }

}
console.log(chai);

console.log()