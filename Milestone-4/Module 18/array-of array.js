const numbers = [1,2,3,6,5];
const tournament_runs = [[], [], []];
// array of array or 2D array
const exam_marks = [
    [98, 84, 50, 65, 88],
    [54, 55, 70, 21, 20],
    [78, 80, 85, 87, 10],
    [33, 50, 12, 60, 65]
]

// console.log(exam_marks[0]); 
// console.log(exam_marks[0][4]);
exam_marks [0][1] = 66; // before it was 84
exam_marks[1].pop()
exam_marks[1].push(44)
// console.log(exam_marks);

for(const marks of exam_marks){
    console.log(marks);
}