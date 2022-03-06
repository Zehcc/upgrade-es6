/* 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce(). */

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];


let totalScore = exams.reduce((acc, exam) => {
    return acc+exam.score
}, 0)

/* Comento para tener la consola mas limpia
console.log(totalScore) */

/* 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce(). */


let totalAprobeScore = exams.reduce((acc,exam) => {
    if(exam.score >4) {
        return acc+exam.score;
    } else {
        return acc;
    }
},0)

/* Comento para tener la consola mas limpia
console.log(totalAprobeScore) */

/* 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce(). */

let examCounter = 0;

let examsAverage = exams.reduce((acc,exam)=>{
    examCounter++
    return acc + exam.score
},0) / examCounter;

console.log(examsAverage);












