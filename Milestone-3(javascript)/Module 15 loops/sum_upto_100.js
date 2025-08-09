let num = 1;
let sum = 0;
while(true){
    if (num > 100){
        break;
    }
    sum += num;
    num++;
    console.log(sum)
}
console.log('Final output', sum)
