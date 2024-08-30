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

function AddNumber (number, number1){
    let number3 = number+number1
    return number3
}
let result1 = AddNumber(2,3)
console.log( "RESULT: ",result1)

//  or directly return the value to the function to print the value 

function AddNumber (number, number1){
    return  number+number1
    
}
let result2 = AddNumber(2,3)
console.log( "RESULT: ",result2)

//--------------------------------------------------

function LoginUserName (username){
    return `${username} just logged in ` 
}
console.log(LoginUserName("sahil"));









