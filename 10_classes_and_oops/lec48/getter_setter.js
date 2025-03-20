// console.log("jai shree krishna")

class user{
    constructor(email,password){
        this.email=email,
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}Sahil`
    }
    set password(value){
        this._password=value
    }

 
}
const chai = new user("sahil@gamil.com","abc")
// console.log(chai);
console.log(chai.password)
console.log(chai.email)

// getter aur setter dono define krna padta hai ek property ke liye 
// getter se value get hot hai aur setter se vaalue set hai 
// property jo define kri hoti agar get aur set degine hogai to default rhti mai working 
// to getter aur setter ki hi rhegi , get aur set ke variable mai same hai bs ._password
// aisa isliye likha hai kyoki usse call stack full nahi hota kuki phle 
// bhi constructor mai value set hoti hai baad mai fir get aur set se value set hoti to 
// call stack full ho jata hai to differ them variable ke name mai changes rhta hai 