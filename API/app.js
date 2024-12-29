//  simply fetching the data from the api using the fetch api 

// const URL ="https://api.github.com/users/hiteshchoudhary";
// let promise = fetch(URL);
// console.log(promise);

// ----------------------------------------------------------------

//  now using the async and await fetching the data 

// const URL ="https://api.github.com/users/hiteshchoudhary";
// const getfacts = async()=>{
//     console.log("getting the data .........")
//     let response =  await fetch(URL)
//     console.log(response);
//     console.log(response.status);
// }

// ---------------------------------------------------------------

//  to convert a particular data into the json format we are using .json() method to change the data 

// const URL ="https://api.github.com/users/hiteshchoudhary";
// const getfacts = async()=> {
//     console.log("getting the data ......")
//     let response = await fetch (URL)
//     console.log(response);
//     let data = await response.json()
//     console.log(data);
//     console.log(data.followers);

// }

// -----------------------------------------------------------------
// printing the the data using the html tag using the dom 

// const URL ="https://api.github.com/users/hiteshchoudhary";
// const factpara = document.querySelector("#facts")

// const getFacts = async()=>{
//  console.log("getting data ..... ");
//  let response = await fetch(URL);
//  console.log(response);
//  let data= await response.json();
//  factpara.innerText = data.followers;
// };
// // getFacts();

// ---------------------------

// const URL ="https://api.github.com/users/hiteshchoudhary";
// const factpara = document.querySelector("#facts");
// const btn = document.querySelector('#btn');

// const getFacts = async()=>{
//  console.log("getting data ..... ");
//  let response = await fetch(URL);
//  console.log(response);
//  let data= await response.json();
//  factpara.innerText = data.followers;
// };
// btn.addEventListener('click' ,getFacts );

// -----------------------------------------------------------------
// same code but with using the promise chaining 
// two then chaing because either the request will fullfiled or it will be rejected 

const factpara = document.querySelector("#facts");
const btn = document.querySelector('#btn');
const URL ="https://api.github.com/users/hiteshchoudhary";
function getFacts(){
fetch(URL)
.then((response)=>{
    return response.json();
})
.then((data)=> {
    console.log(data);
   factpara.innerText = data.followers;
})

}
btn.addEventListener('click' ,getFacts );
// ---------------------------------------------------------------------------
