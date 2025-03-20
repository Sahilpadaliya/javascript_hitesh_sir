// 4 pillars of dom 

// 1) selection of an elements 
// 2) changing html
// 3) changing css
// 4) event listener
// ------------------------------------------------------------ 

// selection of an elements
//  var a = document.querySelector('h1')
//  console.log(a)
// --------------------------------------------------------------

// changing html 
// var a = document.querySelector('h1')
// a.innerHTML ="jai shree krishna"
// ----------------------------------------------------------

// changing css
// var a = document.querySelector('h1')
// a.style.color ="brown"
// -----------------------------------------------------------

// event listener

//  var a = document.querySelector('h1')

//  a.addEventListener('click',function(){
//     a.innerHTML="jai swaminarayan bolo jor se"
//     a.style.color='red'
//     a.style.backgroundColor='black'
//  })
// ------------------------------------------------------------
//  small project on event listener 


  // var bulb = document.querySelector("#bulb");
  // var button = document.querySelector("button");
  // button.addEventListener('click', function() {
  //     bulb.style.backgroundColor = "red";
  // });
  // --------------------------------------------------------------


  //  now adding the on and off logic in the code 

  //   var bulb = document.querySelector("#bulb");
  // var button = document.querySelector("button");
  // var off=0;
  // button.addEventListener('click', function() {
  //   if(off==0){
  //     bulb.style.backgroundColor = "red";
  //     console.log('clicked')
  //     off=1
  //   }
  //   else {
  //     bulb.style.backgroundColor = "transparent";
  //     console.log('clicked off')
  //     off=0
  //   }
  // });

  // ------------------------------------------------------------------------

  // selecting multiple element at a same time 

//  var h = document.querySelectorAll('h1');
//  h.forEach(function(e){
//   console.log(e)
//  })

// -------------------------------------------------------------------------

// another way to select the element 
// document.getElementById('bulb')
// document.getElementsByClassName('bulb')

// -------------------------------------------------------------------------
// diff between the text content and the innerHTML

 var a = document.querySelector ("h1")
 a.textContent='<h1>SWAMINARAYAN</h1>' //----pura text treat krega 
// a.innerHTML='<h1>shreeji</h1>'      //----h1 ko tag treat krega aur text ko  text treat krega 

