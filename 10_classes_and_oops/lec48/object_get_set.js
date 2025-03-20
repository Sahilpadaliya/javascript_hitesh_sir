const user ={
    _email:"sahil@gmail.com",
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value

    }

}
const tea = Object.create(user)//   ye ek object factory hai jaise class new keyword se 
                               // empty object milta hai waise hi isse bhi empty object 
                               // object ke ander milega

console.log(tea.email)                               

