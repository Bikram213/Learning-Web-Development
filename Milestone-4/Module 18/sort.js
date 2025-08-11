const numbers = [6, 1, 7, 5, 1];
// console.log(numbers);
numbers.sort();
// console.log(numbers);

const friends = ['sakib', 'rakib', 'bikram', 'akash','abul'];
friends.sort();
// console.log(friends);

const ages = [1, 5, 100, 15, 12, 8, 2];
// console.log(ages.sort());

// ascending
const sorted_ages = ages.sort(function(a, b) {return a-b })
console.log(sorted_ages);

// descending
const sorted_ages_desc = ages.sort(function(a, b) {return b-a })
console.log(sorted_ages_desc);

