// simple function calling immediatly after the declaring 
// function chai (){
//     console.log(`DB CONNECTED`);
// }
// chai();

//------- IMMEDIATLY INVOKED FUNCTION EXPRESSION (IIFE) ---------------------

// (function chai(){
//      console.log(`DB CONNECTED`)
// })();//---------------NOTE we have to apply the semicolon so that the next iife function will 
// //                    able to run in the console window. jb bhi hme 2 iife ek saath run 
// //                    krna ho to semicolon laf=gana pdega 

// (function chai(){
//     console.log(`DB CONNECTED TWO`)
// })();

// //  ---IIFE WITH ARROW FUNCTION (YE BHI SAME HI HAI BS ARROW LG JATA HAI )------------------
//  unnamed iife function 
// (()=>{
//     console.log(`DB CONNECTED`)
// })();//---------------NOTE we have to apply the semicolon so that the next iife function will 
// //                    able to run in the console window. jb bhi hme 2 iife ek saath run 
// //                    krna ho to semicolon laf=gana pdega 

// (()=>{
//    console.log(`DB CONNECTED TWO`)
// })();

// IF WE WANT TO PRINT THE PARAMETER AS WELL as IN ARROW FUCNTION OF THE IIFE--------------
//  named iife function 
((name)=>{
    console.log(`DB CONNECTED ${name}`)
})("sahil");//---------------NOTE we have to apply the semicolon so that the next iife function will 
//                    able to run in the console window. jb bhi hme 2 iife ek saath run 
//                    krna ho to semicolon laf=gana pdega 

((name)=>{
   console.log(`DB CONNECTED TWO ${name}`)
})("krishna ji");







