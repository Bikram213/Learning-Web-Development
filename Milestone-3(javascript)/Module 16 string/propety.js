const person = {
    name: 'Bikram',
    profession: 'developer',
    salary: 25000,
    age: 25,
    'favourite palaces': ['Bandoban','Saintmartin', 'Kuakata']


}

person.salary = 30000;// for update value
person['age'] = 26 // update value using bracket

console.log(person)


//dot notation
// dot symbol diye object er property er value access kora
// console.log(person)
console.log(person.profession);
const income = person.salary;
console.log(income);



//bracket Notation
//third bracket diye object property er value access
console.log(person['age']);

// console.log(person.'favourite places') // not applicable
console.log(person['favourite palaces']);