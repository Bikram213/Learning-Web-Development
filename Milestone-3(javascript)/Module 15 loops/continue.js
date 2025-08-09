// Continue means skip this one
// break means ---> I am done with this loop. End the loop

for (let i = 1; i <=10; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(i);
}