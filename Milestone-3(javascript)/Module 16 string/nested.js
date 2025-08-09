const school = {
    name: 'vnc',
    class: ['1', '2', '3'],
    events: ['science fair', 'bijoy dibosh', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

// console.log(school.name);
// console.log(school.unique);// object paisi
// console.log(school.unique.color);

console.log(school);
console.log(school.unique.result.merit);
school.unique.result.merit = 'top top most';
console.log(school.unique.result.merit);

//delete property
delete school.class;
console.log(school);
