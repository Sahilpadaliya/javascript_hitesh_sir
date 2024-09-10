// element target in from the console window learning 

document.getElementById('title')
// by providing the dot method we can access the different of the element 
document.getElementById('title').id
document.getElementById('title').class//by these method it will not show the class but by 
//                                     the classname method it will show the class name 

document.getElementById('title').className
document.getElementById('title').getAttribute
document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')

// to set the element acc to ourself 
document.getElementById('title').setAttribute('class','test')
document.getElementById('title').setAttribute('class','test heading')
// -----------------------------------------------------------------------

document.getElementById('title')
const title = document.getElementById('title')
title
title.style.backgroundColor="green"
title.style.padding = "15px"
title.style.borderRadius="15px"

// --------------------------------------------------------------------

// how to add the content and find the content 

title
title.textContent//----output---> 'DOM learning on chai aur code'
title.innerText //----output---> 'DOM learning on chai aur code test text'

title.innerHTML//----output---> 'DOM learning on chai aur code <span style="display:none;">test text</span>'

// -----------------------------------------------------------------------

document.getElementsByClassName('heading')

// -----------------------------------------------------------------------

document.querySelector('h1')

document.querySelector('#title')

document.querySelector('.heading')

document.querySelector('input[type="password"]')

document.querySelector('p: first-child')

// ------
document.querySelector('ul')
const myul= document.querySelector('ul')

myul.querySelector('li')
 const turngreen= myul.querySelector('li')

 turngreen.style.backgroundColor = "green"
 turngreen.style.padding = "10px"

 turngreen.innerText="five"//five

// selecting the all the element 

document.queryselectorALL('li')
const templilist=document.queryselectorALL('li')
templilist
// extra
const myarr = [1,2,3,4]
myarr// array prooerties are defines=d in these inside by default 

// -----
templilist
templilist.style.color = "green"//ye kam nahi krega 
templilist[0].style.color = "green"// ye kam krega kyoki wo node list hai and html collection a
                                //     are also same as the array 

// ------------
const myh1= document.querySelectorAll('h1')
myh1.style.color = 'green'
myh1[0].style.color= 'green'
// ------------
templist 
templist.forEach(function(l){
    l.style.backgroundColor='green'
})
// --------------------------------------------------------------------------------

document.getElementsByClassName('list-item')// it will return the html collection 
const tempclasslist = document.getElementsByClassName('list-item')
tempclasslist.foreach(function(li){

}
)
// converting the html collection into the array 
Array.from(tempclasslist)
const myconvertedarray= Array.from(tempclasslist)
myconvertedarray.forEach(function(li){
 li.style.color = 'orange'
})


// -------------------------------------------------------------------------------

document.querySelectorAll('h2')
const allh2=document.querySelectorAll('h2')
allh2[0].innerText
allh2[2].innerText

document.querySelectorAll('.mw-headline')
const myh= document.querySelectorAll('.mw-headline')
myh[0].innertext
myh.foreach(function(h){
    h.style.color='red';
    h.style.backgroundColor='green';
    h.style.padding='10px';
    h.innerText="sahil";
})














