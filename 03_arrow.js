const user = {
      username : "sahil",
      price : 999,

      welcomeMessage : function (){
      console.log(`$(this.username),welcome to website`)
      }
}
user.welcomeMessage();
user.username ="krishnaji";
user.welcomeMessage();