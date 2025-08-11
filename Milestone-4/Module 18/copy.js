let price = 25;
const comp_price = price;
price = 20
// console.log(price);
// console.log(comp_price);

const products = [25, 25, 25];
const comp_products = [];
// const comp_products = products;

for(const product of products){
    comp_products.push(product);
}
comp_products[0] =15;
products[0] = 55;

// console.log(products);
// console.log(comp_products);

const numbers = [1, 2, 3, 4];
// const newNumbers = Array.from(numbers);
const newNumbers = [].concat(numbers);
newNumbers.push(7);
console.log(numbers);
console.log(newNumbers);

// shallow copy vs deep copy