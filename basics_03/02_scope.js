
// simply declaring the variable and use it 
// let a =10;
// const b =13;
// var c = 9;

// console.log(a);
// console.log(b);
// console.log(c);

// ----------------------------------------------------------
// scope of the variable is where we can use the variable upto to the which area 

// if(true){
// let a =10;
// const b =13;
// var c = 9;
// }
// // console.log(a);
// // console.log(b);
// console.log(c);// var scope is global therefore the value inside the block scope is accessible and therefore we dont use it


// // --------------------------------
// var c =300;
// if(true){
//     let a =10;
//     const b =13;
//     var c = 9;
//     }
//     console.log(c);
// //  ----------------------------
// var c =300;
// if(true){
//     let a =10;
//     const b =13;
//      c = 9;
//     }
//     console.log(c);

//     // --------------------------------------------------------------------------

//     let a =100;
//     if(true){
//         let a =10
//         const b =13
//         console.log("result: "  , a)
//         };
//         console.log(a)
 
// --------------------------------------------------------------------------------------------------------------------------

//-------------------NESTED SCOPE----------------------------------------------------------

// function one (){
//     const username = "Sahil";
//     function two (){
//         const website = "youtube";
//         console.log(username);

//     }
// //console.log(website)
// //two()
// }
// one();
// // -------------------------another example of the scope inside a condition (if-else)
// if (true ){
//     const username= "sahil"
//     if(username==="sahil"){
//      const website = "youtube"
//      console.log(username+website)
     
//     }
//     console.log(website)

// }
// console.log(username);

// ---------------------------INTRESTING-------------------------------

// function addone(num){
//     return num+1;

// }
// addone(5);

// const addtwo =function (num){
//     return num+2;
// }
// addtwo(6)
// console.log(addtwo(6))

// ----------------------------------------------
 addone(5);
 function addone(num){
    return num+1;

}

addtwo(6)// it will not work because of the calling the function before it was created 
// since it was the only the variable and inside that the function is created so thats why 
// it is not print the value 
const addtwo =function (num){
    return num+2;
}



