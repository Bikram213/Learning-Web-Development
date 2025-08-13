/*
    function takes an array as parameter
    give me the average of the odd number in the array
*/
function oddAverage(numbers){
    let sum = 0;
    let odds = [];
    for(const number of numbers){
        // console.log(number);
        if(number % 2 !== 0){
           odds.push(number); 
        }
    }
    console.log(odds);

    for (const odd of odds){
        sum += odd;
    }
    const len = odds.length;
    let avg = sum / len;
    return avg;
} 

const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAverage(numbers);
console.log ('average of the odd numbers is '+ avg);