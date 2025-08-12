/**
 * Create a function that will return  the sum of even numbers
 */

function evenNumbersOnly(numbers){
    let sum = 0;
    let even = [];
    for (number of numbers){
        // console.log(number);
        if(number % 2 === 0){
            even.push(number);
            sum += number;
        }
        
    }
    return even;
}

const numbers = [4, 6, 9, 10, 1];
// const arraySum = evenNumbersOnly(numbers);
// console.log(arraySum);

function sumOfEvenNumbers(numbers){
    let sum = 0;
   for (number of numbers){
        sum += number;
   }
   return sum;

}

const numbers2 = [1, 2, 3, 4, 5, 6];
const sum = sumOfEvenNumbers(numbers2);
console.log(sum);
