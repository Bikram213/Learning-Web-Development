const sentence = 'I am learning Web Dev.';
//cost result = '.veD beW gninrael ma I';

let reverse = '';
for (const letter of sentence){
    //console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);

let rev = ''
// using for loop reverse
for(let i = 0; i < sentence.length; i++){
    // console.log(sentence[i])
    const letter = sentence[i];
    rev = letter + rev
}
// console.log(rev);

// shortcut
const reversed = sentence.split('').reverse().join('');
console.log(reversed)


