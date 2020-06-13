"use strict";
function getResult(a,b,c){
    let D = b ** 2 - 4 * a * c;
    let result = [];
    if (D < 0) {
        result = [];
    } else if (D == 0) {
        result = [- b / (2 * a)];
    } else {
        result [0] = (- b + Math.sqrt(D)) / (2 * a);
        result [1] = (- b - Math.sqrt(D)) / (2 * a);
    } return result;
}

function getAverageMark(marks){
    let sum = 0;
    let averageMark = sum / marks.lengh;
    if (marks.lengh > 5) {
      marks.slice(0, 5);
      console.log("Количество введённых оценок превышает допустимое значение");
    } for (let i = 0; i <= marks.lengh - 1; i++) {
        sum = sum + marks[i];
    } return averageMark;
}

function askDrink(name,dateOfBirthday){
    let year = new Date().getFullYear();
    let age = year - dateOfBirthday.getFullYear();
    let resolution;
    if (age >= 18) {
        resolution = "Не желаете ли олд-фэшн, " + name + " ?";
    } else {
        resolution = "Сожалею, " + name + " , но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!";
    }
    return resolution;
}