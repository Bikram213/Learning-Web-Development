
let array = [1, 2, 5, 11, 12, 98, 5];
const num = 5;

function countNum(array, num){
 
    let count = 0;
    for(const number of array){
       if( number === num){
        count += 1;
       }
    }
    return count;
}

countNum(array, num);

console.log(countNum(array, num));