// function SayMYName (){
//     console.log("S")
//     console.log("A")
//     console.log("H")
//     console.log("I")
//     console.log("L")
// }

// SayMYName();

// //----------------------

// function AddTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }
// AddTwoNumbers(2,3)
// AddTwoNumbers(2,"A")
// AddTwoNumbers(2,'3')

// const result =  AddTwoNumbers(2,3)
// console.log("Result : ",result);// printed undefine because of the dont return the object 

//------------------------------

// ------RETURN THE FUNCTION VALUE TO VARIABLE TO PRINT THE VALUE 

// function AddNumber (number, number1){
//     let number3 = number+number1
//     return number3
// }
// let result1 = AddNumber(2,3)
// console.log( "RESULT: ",result1)

//  or directly return the value to the function to print the value 

// function AddNumber (number, number1){
//     return  number+number1
    
// }
// let result2 = AddNumber(2,3)
// console.log( "RESULT: ",result2)

//--------------------------------------------------

 // function LoginUserName (username){
 //     return `${username} just logged in ` 
 // }
 // console.log(LoginUserName("sahil"));


//------------------condition based return value  

// function LoginUserName(username){
//     if(username=== undefined){
//         console.log("please enter a username");

//     }
//     return `${username} just logged in `  
// }

// console.log(LoginUserName("krishna ji "));
// console.log(LoginUserName(""));

// -------when the empty string comes then also also the just loggedin print to stop that we have to use the return in the if consdition 
//         because after the return statement the function does not run out of that 

// function LoginUserName(username){
//     if(username=== undefined){
//         console.log("please enter a username");
//         return 
//     }
//     return `${username} just logged in `  
// }

// console.log(LoginUserName("krishna ji "));
// console.log(LoginUserName(""));

// // or can be written as 

// function LoginUserName(username){
//     if( ! username){
//         console.log("please enter a username");
//         return 
//     }
//     return `${username} just logged in `  
// }

// console.log(LoginUserName("krishna ji "));
// console.log(LoginUserName(""));


// ---------------------------DEFAULT VALUE PASSED 

// function LoginUserName(username = "SAMMY"){
//     if(username === undefined){
//         console.log("please enter a username");
//         return 
//     }
//     return `${username} just logged in `  
// }

// // console.log(LoginUserName("krishna ji "));
// console.log(LoginUserName(" "));



// -----------------------------------------------------------------------------------------------------------------------

// ---------------------REST OPERATOR -----------------------

function CartPrice(...num1){
    return num1
}

console.log(CartPrice(200,300,400,500))

// -----------------------------------------------

function CalculateCartPrice(val1, val2, ...num1){
    return num1;
}
console.log(CalculateCartPrice(200,300,400,500,500,600))// the first and the second value are stored under the val1 and val2 and rest on the num1 rest operator
console.log(CalculateCartPrice(200))

// ----------------------------------------------














