function tenTimes(number){
    const result = number * 10;
    return result;
    console.log(result); // this unreachable the funtion is closed as returned
}

function cutHalf (number){
    const half = number / 2;
    return half;
}

tenTimes(5);
const result = tenTimes(5);
console.log(result);
const number2 = 10;
console.log(result + number2);

/*let a = 5;
let b = '5';
console.log(a + b);*/