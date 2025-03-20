//  ye function method se get aur set ko define krne ka syntax hai 

function user( email , password){
    this._email= email,
    this._password=password
}
Object.defineProperty(this,'email',{
    get:function(){
        return this.email.toUpperCase()
    },
    set:function(value){
        this.email=value;
    }
})
const chai = new user("sahilpadaliya36@gmail.com","9685")
console.log(chai.email);