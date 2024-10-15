// fetch('https://somethings.com').then().catch().finally();// all this are the consume of the
//  promise and and the fetch but we have to create it to understand more
// -----------------------------------------------------------------------------------
// ----- PROMISE ---------------
// const promiseone = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseone.then(function () {
//   console.log("promise consumed");
// });

// // ----------------------------------------------------------------------------------
// // constpromisetwo

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("async task2 is appointed ");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("task 2 completed");
// });

// //  .then () is connected to the resolve and .catch () is connected to the reject
// //  we can also use the promise without storing it into the variable

// // -----------------------------------------------------------------------------------
// //  promise three

// const promisethree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("jai shree krishna ");
//     resolve({
//       username: "sahil",
//       emailid: "sahilpadaliya36@gmail.com",
//       age: "20",
//     });
//   }, 1000);
// });

// promisethree.then(function (events) {
//   console.log(events);
// });
// //  we can pass the parameter in the resolve method this is showing these

// // --------------------------------------------------------------------------------

// // promise four

// const promisefour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({
//         username: "sahil",
//         emailid: "sahilpadaliya36@gmail.com",
//         password: "123",
//       });
//     } else {
//       reject("error: something went wrong");
//     }
//   }, 1000);
// });

// promisefour
//   .then(function (user) {
//     console.log(user);
//     return user.username;
//   })
//   .then(function (username) {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() =>
//     console.log("finally the promise is either resolved or rejected")
//   );

// ------------------------------------------------------------------------------------
// const promise five

// by the help of the async and await

// const promisefive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "sahilpadaliya",
//         emailid: "sahilpadaliya36@gmail.com",
//         password: "123",
//       });
//     } else {
//       reject("error: js went wrong");
//     }
//   }, 1000);
// });

// ye wala codeerror handle nahi kr payega
// async function consumepromisefive(){
//     const response = await promisefive
//     console.log(response);
// }
// consumepromisefive();

// ye error bhi handle kr lega
// async function consumepromisefive(){
//     try{
//         const response = await promisefive
//         console.log(response);
//     }
//     catch (error){
//        console.log(error);
//     }

// }
// consumepromisefive();

// ---------------------------------------------------------------------------------------

async function getallusers() {
  try {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}
getallusers();

//  same thing happening with the .then and with the .catch()
// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.
