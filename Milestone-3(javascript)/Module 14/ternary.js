/*
    TERNARY ---> three parts
    ? :

    condition ? do something when true : do something when false
*/

const age = 18

// if (age >= 18){
//     console.log("You can vote");
// }
// else{
//     console.log('You can not vote');
// }

// simple ternary
// age >= 18 ? console.log("You can vote") : console.log('You cannot vote');

let price = 500;
const isLeader = false;

if(isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
// console.log(price);

price = isLeader===true ? 0 : price+100;
