const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
username.welcomeMessage
 
 
 
 
 //const addTwoNumber = (Number1, Number2) =>{
    //return Number1 + Number2
//}
//const addTwoNumber =(Number1, Number2) =>  Number1 + Number2
//const addTwoNumber =(Number1, Number2) =>  (Number1 + Number2)

const addTwoNumber =(Number1, Number2) => ({username:"Munim"})
console.log(addTwoNumber(5,5));
