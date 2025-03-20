
// task hai mere ko string ki length print krni hai lekin space ki length add ho rahi bar 
// bar to uske ek object mai hi method ya property bna diye hai jisse wo bar bar use krle 
// to uskeliye ye task hai 

// let myname= "sahil    "
// let mychannel = "chai    "
// console.log(myname.truelength);


// task ka code ------------------------------------------------------------ 

let anotherusername= "chaiaurcode     ";
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`)

}
anotherusername.truelength();
"sahil".truelength();
"tea".truelength();
// ------------------------------------------------------------------------

// power de rahe to the array  and the object  alteranatively phle object jisse sb koi acces 
// dusre mai power de rahe array ko taki wo sirf array msi hi access ho 
// bhr ke function , object aur bhi ki=oi access na kr paye  

let myheros = ["thor", "spiderman"]
 
let heropower = {
    thor:"hammer",
    spiderman:"sling",

    getspiderpower:function(){
       console.log(`spider power is ${this.spiderman}`)
    }

}

Object.prototype.hitesh= function(){
    console.log('hitesh is present in all objects ')

}
heropower.hitesh();