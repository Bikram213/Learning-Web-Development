const mobile = {
    brand : 'Redmi',
    price: 35000,
    color: 'black',
    camera: '108mp',
    isNew: true

}

//for of : array
//for in : object
for(const prop in mobile){
    // console.log(prop);
    // console.log(mobile[prop]);// this is for value
}

const keys = Object.keys(mobile);
console.log(keys);
for(const key of keys){
    console.log(key,':',mobile[key]);
    
}