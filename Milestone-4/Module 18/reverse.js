const numbers = [1, 2, 3, 4, 5];
// reverse = [5, 4, 3, 2, 1]

/*for(let i = numbers.length - 1; i >= 0; i--){
    console.log(numbers[i]);
}*/

// push ---> last add
// pop ---> last element remove
// shift ---> first element remove
// unshift ---> add in first element 

const reverse =[];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
    reverse.unshift(numbers[i]);
}
console.log(reverse)