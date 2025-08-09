//odd number
/*for (let i = 0; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}*/

// Give me the list numbers between 1 to 30 divisible by 5

/*let num = 1;
while(num <= 30){
    if(num % 5 == 0){
        console.log(num)
    }
    num++;
}*/

// Give me the sum of numbers from 1 to 20 that are divisible by 3
let sum = 0;
for(let i =1 ; i <= 20; i++){
    if(i % 3 == 0){
        sum += i;
    }
}
console.log(sum);
