const numbers = [1, 2, 43, 54, 4];
const players =[{},{},{}];
const employees = [
    {name: 'Bikram', desingnation: 'Developer', salary: 25000},
    {name: 'Atik', desingnation: 'Content Writer', salary: 24000},
    {name: 'Abdul', desingnation: 'Digital Marketer', salary: 20000}
]

// console.log(employees);
// console.log(employees[0]);
// console.log(employees[1]);
// console.log(employees[1].salary);
// console.log(employees[2].desingnation);

/*for(const employee of employees){
    console.log(employee.salary, employee.desingnation);
}*/

for (const emp of employees){
    const person = emp;
    const personInfo = person.name + ': ' + person.salary;
    console.log(personInfo);
}

