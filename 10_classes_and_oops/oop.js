//    simply the object literals 

const user={
    username: 'sahil',
    loginCount:'13',
    signedin:true,

    getUserDetails: function(){
       console.log('got the user details from the database ');
       console.log(`username: ${this.username}`);
       console.log(this)
    }

}

// console.log(user)
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// --------------------------------------------------------------------------------
//  now the constructor function 



// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     this.greeting = function(){
//         console.log(`Welcome ${this.username}`);

//     }

//     return this
// }

// const userOne = new User("hitesh", 12, true)
// const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne);
// //console.log(userTwo);
// console.log(userone.constuctor);