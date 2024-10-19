//  CALL AND THIS KEYWORD 
// call method explicitly first method ka referrence rakhega uske stack se bhar niklne 
// ke bad bhi  

function setusername(username){
    //  manlo ye function complex database bhi call kr raha hai 
    this.username= username
    console.log("called");

}

function createuser(username,email,password){
    setusername.call(this,username)
    this.email= email
    this.password= password

}
const chai =  new createuser('sahil', 'sahilpadaliya36@gmail.com','123')
console.log(chai);